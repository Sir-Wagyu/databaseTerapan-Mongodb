db.getCollection('transactions').aggregate(
  [
    {
      $match: { transaction_count: { $gt: 50 } }
    },
    {
      $group: {
        _id: '$account_id',
        totalAmount: {
          $sum: '$transaction_count'
        }
      }
    }
  ]
);
