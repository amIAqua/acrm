import { $loading } from './model'
import { searchRequestFx } from '../clients-search'

$loading.on(searchRequestFx.pending, (_prev) => !_prev)
