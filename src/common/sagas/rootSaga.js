import { fetchProductWatcherSaga } from "../../home/Products/saga";
import { fetchCartWatcherSaga } from "../../home/Cart/saga";

export const rootSaga = [
    fetchProductWatcherSaga,
    fetchCartWatcherSaga
]


