import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export default async function handler(req, res) {
  const { id, period } = req.query;

  if (!id || !period) {
    return res.status(400).json({ error: "Missing id or period parameter" });
  }

  try {
    await client.connect();
    const db = client.db("brolly");
    const messages = db.collection("messages");

    // Get one random message for the given weatherId and period
    const pipeline = [
      {
        $match: { weatherId: parseInt(id) }
      },
      {
        $unwind: "$messages"
      },
      {
        $match: {
          $or: [
            { "messages.period": period },
            { "messages.period": "any" }
          ]
        }
      },
      {
        $unwind: "$messages.messages"
      },
      {
        $sample: { size: 1 }
      },
      {
        $project: {
          _id: 0,
          message: "$messages.messages"
        }
      }
    ];

    const result = await messages.aggregate(pipeline).toArray();

    if (!result.length) {
      return res.status(404).json({ error: "No message found." });
    }

    res.status(200).json({ message: result[0].message });
  } catch (error) {
    console.error("Mongo error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}