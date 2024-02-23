/**
 *  Generate directus query fields from object desctiption
 */
function queryParameters(queryObj: any): string {
  const generate = (parent: any, key: string, trace: string = ""): string => {
    let result = "";
    let prefix = trace == "" ? "" : trace + ".";
    Object.keys(parent[key]).forEach((item) => {
      if (typeof parent[key][item] == "string") {
        result = `${result}${prefix}${item},`;
      } else {
        result = `${result}${generate(parent[key], item, `${prefix}${item}`)}`;
      }
    });
    return result;
  };
  const result = generate(queryObj, Object.keys(queryObj)[0]);
  return result.slice(0, result.length - 1);
}

export {queryParameters};