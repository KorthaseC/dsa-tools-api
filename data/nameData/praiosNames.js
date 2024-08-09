//prettier-ignore
const maleFirstNames = [
  "Fürchtpraios", "Praias", "Praibert(o)", "Praiocenze", "Praiodan", "Praioderich", "Praiodon", "Praiodrago", 
  "Praiodrait", "Praiodracus", "Praiofasto", "Praiofero", "Praiofix", "Praiofrid", "Praiofried", "Praiohudo", 
  "Praiojustin(us)", "Praiojan", "Praiojo", "Praiojoschka", "Praiojuris", "Praiojustin", "Praoberto", "Prapios", 
  "Visopraios", "Praioald(o)", "Praioaldus", "Praioavan", "Praioavar", "Praioavardo", "Praioavarres", 
  "Praioavr(r)o", "Praiovictus", "Praioivíd", "Praioivin(í)o", "Praiovald(o)", "Praiowein", "Praioevin", 
  "Praiovin", "Praioin", "Praioinovich", "Praioinwin", "Praioinwulf", "Praioinwulfus", "Praioinwyn", "Praiox", 
  "Praioenz", "Praiozio", "Prauistin(us)", "Prajustus", "Prajoahn", "Prajoelff", "Prajoipio", "Prajochka", 
  "Prajojuris", "Prajustin", "Praoberto", "Prapios", "Visopraios"
];

//prettier-ignore
const femaleFirstNames = [
  "Praiadne", "Praialda", "Praide", "Praienne", "Praiesch(n)a", "Prainabirg", "Praioberga", "Praioberta", 
  "Praiobeth", "Praioburga", "Praiocenza", "Praiociose", "Praiocletia", "Praiodane", "Praiodette", "Praiodine", 
  "Praiodita", "Praiodis", "Praiodora", "Praiofilia", "Praiogard", "Praiogenie", "Praiohanna", "Praiokaste", 
  "Praiola", "Praiolana", "Praiolande", "Praiolanthe", "Praiolena", "Praiolill", "Praioline", "Praiolinka", 
  "Praiolis", "Praiolyn(n)", "Praiolyssa", "Praiomande", "Praiome(l)da", "Praiomee", "Praiomena", "Praiomette", 
  "Praiomila", "Praiomine", "Praiomir(i)a", "Praiona", "Praiona(n)da", "Praionarda", "Praionata", "Praionella", 
  "Praioneris", "Praionette", "Praionez", "Praionica", "Praionide", "Praionike", "Praionilla", "Praionina", 
  "Praionique", "Praionis", "Praionita", "Praionne", "Praionore", "Praiopatra", "Praiope", "Praiophelia", 
  "Praiophena", "Praiophenie", "Praiophil(i)a", "Praiopina", "Praioradis", "Praioralda", "Praiorein", 
  "Praiorella", "Praiorena", "Praiorenzia", "Praioretta", "Praiorieke", "Praioriga", "Praioris", "Praiosa", 
  "Praiosande", "Praioscencia", "Praioschna", "Praioselle", "Praiosgard", "Praioshild", "Praioslieb(e)", 
  "Praioslind(e)", "Praiosmara", "Praiosmena", "Praiosmene", "Praiosmin(a)", "Praiosmine", "Praiostina", 
  "Praiostraut", "Praiostrud(e)", "Praiota(ne)", "Praiotega", "Praiotella", "Praiotina", "Praiotrix", 
  "Praiova", "Praiovalda", "Praiovanca", "Praiovanna", "Praiovera", "Praiovin(i)a", "Praiovinja", "Praiowalda", 
  "Praiowalde", "Praiowen", "Praiowene", "Praiowine", "Praiowinia", "Praiowyn", "Praitrud", "Praiustina", 
  "Prajan(n)a", "Prajescha", "Prajolanthe", "Prajoschka", "Prajustitia", "Prayolathe", "Prianna", "Visopraia"
];

const regionSpecifics = {
  hasGenderSpecificLastName: false,
  hasEpithet: false,
  hasGenderSpecificEpithe: false,
  hasNoLastName: true,
  hasNoble: false,
  hasNoblePrefix: false,
  hasNobleFirstNames: false,
  hasMultiFirstNames: false,
  hasClanNames: false,
};

module.exports = { maleFirstNames, femaleFirstNames, regionSpecifics };
