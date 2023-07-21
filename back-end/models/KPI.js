import mongoose from 'mongoose';
import { loadType } from 'mongoose-float';

const Schema = mongoose.Schema;
loadType(mongoose, 2);

const KPISchema = new Schema({
  totalProfit: {
    type: mongoose.Types.Currency,
    currency: 'USD',
    get: (v) => v/100
  },
  totalRevenue: {
    type: mongoose.Types.Currency,
    currency: 'USD',
    get: (v) => v/100
  },
  totalExpenses: {
    type: mongoose.Types.Currency,
    currency: 'USD',
    get: (v) => v/100
  },
  expenseByCategory: {
    type: Map,
    
    type: mongoose.Types.Currency,
    currency: 'USD',
    get: (v) => v/100
  }
});

const KPI = mongoose.model('KPI', KPISchema);

export default KPI;
