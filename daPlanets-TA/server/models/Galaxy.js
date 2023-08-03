import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const GalaxySchema = new Schema({
  name: { type: String, required: true },
  stars: { type: Number, required: true }
},
  { timestamps: true, toJSON: { virtuals: true } }
)

GalaxySchema.virtual('planetCount', {
  localField: '_id',
  ref: 'planet',
  foreignField: 'galaxyId',
  count: true
})