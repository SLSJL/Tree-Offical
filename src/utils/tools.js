import KnowledgeData from "./../config/knowledge";
/**
 * getTreCheckedKeys
 * desc 获取树默认选中的Keys
 */
let DefaulActivetKeys = [];
let getTreeCheckedKeys = dataTree => {
  dataTree.map(el => {
    DefaulActivetKeys.push(el.key);
    if (!el.children) return;
    getTreeCheckedKeys(el.children);
  });
  return DefaulActivetKeys;
};

let getInfoCard = id => {
  return KnowledgeData[id];
};

let getFileUrl = () => {
  return process.env.VUE_APP_BASE_FILE;
};
export default { getTreeCheckedKeys, getInfoCard, getFileUrl };
