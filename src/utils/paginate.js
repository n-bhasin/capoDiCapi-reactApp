import _ from "lodash";

//we need three major items
export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  // console.log(startIndex);
  return _(items).slice(startIndex).take(pageSize).value();
}
