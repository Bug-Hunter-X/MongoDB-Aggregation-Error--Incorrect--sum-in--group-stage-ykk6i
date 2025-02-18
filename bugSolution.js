```javascript
//Corrected aggregation pipeline
db.collection.aggregate([
  {$match: { /*some filter*/ } },
  {$group: {_id: "$fieldName", sum: {$sum: $anotherField}}}, //Corrected line:  Using $anotherField instead of "$anotherField"
  {$sort: {sum: -1}}
])
```