// ստեղծել paginations class, որը ստանում է էջում տվյալների քանակը
// getData() - տվյալներ ստանալու համար
// render() - տվյալները արտատպելու համար
// load() - կանչում է բոլոր ֆունկցիաներին

import { Pagination } from "./paginations.js";

const newPagination = new Pagination(6, true)

newPagination.load()