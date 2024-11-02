export default function handler(req, res) {
    const users = [
      { id: 1, name: 'Maya' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ];
  
    res.status(200).json(users);
  }
  