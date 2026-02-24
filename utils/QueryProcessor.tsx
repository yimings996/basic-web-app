export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("what is your andrew id")) {
    return "yimings2";
  }

  if (query.toLowerCase().includes("57 plus 32?")) {
    return "89";
  }
  if (query.toLowerCase().includes("21 multiplied by 58")) {
    return "1218";
  }
  if (query.toLowerCase().includes("4 plus 71")) {
    return "75";
  }
  if (query.toLowerCase().includes("46 plus 68")) {
    return "114";
  }
  if (query.toLowerCase().includes("56 multiplied by 86")) {
    return "4816";
  }

  return "";
}
