import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from "@/@core/configs"

const initialClientState = {
    data: Array<any>,
    total: 1,
    totalPages: 0,
    currentPage: 0,
    page: DEFAULT_PAGE,
    per_page: DEFAULT_PER_PAGE,
    params: {},
    showDetail: false,
    innerWidth: 1200,
    linkTab: '',
    isResetPaging: false,
}

export default initialClientState