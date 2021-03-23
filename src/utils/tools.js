/**
 * getTreCheckedKeys
 * desc 获取树默认选中的Keys
 */
let DefaulActivetKeys = [];
const getTreeCheckedKeys = dataTree => {
  dataTree.map(el => {
    DefaulActivetKeys.push(el.key);
    if (!el.children) return;
    getTreeCheckedKeys(el.children);
  });
  return DefaulActivetKeys;
};


const getFileUrl = () => {
  return process.env.VUE_APP_BASE_FILE;
};
export default { getTreeCheckedKeys, getFileUrl };
