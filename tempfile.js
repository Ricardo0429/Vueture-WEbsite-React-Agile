function Paginate(p, lang) {
  lastIndex = 0;
  projects[lang] = pageCount.reduce((acc, next) => {
    if (next === 1) {
      acc = { [next]: p.slice(next - 1, next + 4) };
      lastIndex = next + 4;
      return acc;
    } else {
      acc[next] = p.slice(lastIndex, lastIndex + 5);
      return acc;
    }
  }, {});
}

let languages = ["Ruby", "JavaScript", "Python"]
let items     = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10"]
let pageCount = [...Array(items.length / 5 + 1).keys()]
let projects  = {}

Paginate(items, "Ruby")
console.log(projects)