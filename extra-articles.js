const IMPORTED_ARTICLES = [
  ["Esencias Hombre",30,[
    ["Silver Mountain","Creed"],["The One","Dolce & Gabbana"],
    ["1 Million","Paco Rabanne"],["1 Million Elixir","Paco Rabanne"],["1 Million Lucky","Paco Rabanne"],
    ["1 Million Intense","Paco Rabanne"],["1 Million Prive","Paco Rabanne"],["1 Million Royal","Paco Rabanne"],
    ["212","Carolina Herrera"],["212 Heroes","Carolina Herrera"],["212 Sexy","Carolina Herrera"],
    ["212 VIP","Carolina Herrera"],["212 VIP Black","Carolina Herrera"],["360","Perry Ellis"],
    ["360 Red","Perry Ellis"],["Aqua Di Gio","Giorgio Armani"],["Aqua Di Gio Profondo","Giorgio Armani"],
    ["Aqva","Bvlgari"],["Adrenaline","Enrique Iglesias"],["Bad Boy","Carolina Herrera"],
    ["Bad","Diesel"],["Be a Legend","Paco Rabanne"],["Black XS","Paco Rabanne"],
    ["Black XS L'Excess","Paco Rabanne"],["Blue Seduction","Antonio Banderas"],["Boss","Hugo Boss"],
    ["Boss In Motion","Hugo Boss"],["Boss Bottled","Hugo Boss"],["CK One","Calvin Klein"],
    ["CH","Carolina Herrera"],["Diesel Plus Plus","Diesel"],["Emblem","Mont Blanc"],
    ["Eau de Fraiche","Versace"],["Eau de Cartier","Cartier"],["Eros","Versace"],
    ["Eros Energy","Versace"],["Eros Flame","Versace"],["Fahrenheit","Dior"],
    ["Ferrari Black","Ferrari"],["Gucci Pour Homme","Gucci"],["Givenchy Blue","Givenchy"],
    ["Gucci Guilty","Gucci"],["Hugo Intense","Hugo Boss"],["Invictus","Paco Rabanne"],
    ["Invictus Legend","Paco Rabanne"],["Invictus Victory","Paco Rabanne"],["Le Male Elixir","Jean Paul Gaultier"],
    ["L.12.12 Blanc","Lacoste"],["L.12.12 Noir","Lacoste"],["Lacoste Red","Lacoste"],
    ["Legacy","Cristiano Ronaldo"],["Light Blue Pour Homme","Dolce & Gabbana"],["Luna Rossa Ocean","Prada"],
    ["Nautica Voyage","Nautica"],["Pegasus","Parfums de Marly"],["Phantom","Paco Rabanne"],
    ["Polo Blue","Ralph Lauren"],["Polo Ultra Blue","Ralph Lauren"],["Pure XS","Paco Rabanne"],
    ["Sauvage","Dior"],["Sauvage Elixir","Dior"],["Scandal Pour Homme","Jean Paul Gaultier"]
  ]],
  ["Árabes Hombre",100,[
    ["Club de Nuit Intense","Armaf"],["King","Bharara"],["9PM","Afnan"],["Asad","Lattafa"],
    ["Odyssey Mandarin","Armaf"],["Asad Bourbon","Lattafa"],["Asad Elixir","Lattafa"],["Khamrah","Lattafa"]
  ]],
  ["Árabes Unisex",100,[
    ["Amber Gold","Al Haramain"],["For Glory","Lattafa"],["Crystal Rouge","Jousset"],
    ["Al Contrario","Tiziana Terenzi"],["Bade'e Al Oud Amethyst","Lattafa"],
    ["Bade'e Al Oud Sublime","Lattafa"],["Nebras","Lattafa"],["Teriaq","Lattafa"],
    ["Ahli","Karpos"],["Affection Love","Lattafa"],["Oudgasm Smoky Oud 07","Kayali Fragrances"],
    ["9AM Dive","Afnan"],["Amber Rouge","Orientica"]
  ]],
  ["Árabes Mujer",100,[
    ["Haya","Lattafa"],["Yara Candy","Lattafa"],["Yara Tous","Lattafa"],["Eclaire","Lattafa"],
    ["Fakhar Rose","Lattafa"],["Her Confession","Lattafa"],["Island Bliss","Armaf"],
    ["Yum Yum","Armaf"],["Berry On Top","Lattafa"],["Cookie Crave","Lattafa"],
    ["Mallow Madness","Lattafa"],["Vainilla Freak","Lattafa"],["Whipped Pleasure","Lattafa"]
  ]],
  ["Esencias Mujer",30,[
    ["Rush","Victoria's Secret"],["Scandal","Jean Paul Gaultier"],["Sorbetto Rosso","Escada"],
    ["Swiss Army","Victorinox"],["Tommy Girl","Tommy Hilfiger"],["Touch Of Pink","Lacoste"],
    ["Vainilla Lace","Victoria's Secret"],["Valentino Donna Born In Roma Intense","Valentino"],
    ["Valentino Donna Born In Roma","Valentino"],["Velvet Sugar","Bath & Body"],
    ["Very Good Girl","Carolina Herrera"],["Very Irresistible","Givenchy"],
    ["Versense","Versace"],["Vip Private Show","Britney Spears"]
  ]]
].flatMap(([category,ml,items])=>items.map(([name,brand])=>({name,brand,category,ml})));
