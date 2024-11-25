const useTraverseTree = () => {
  function insertNode(folderData, folderId, item, isFolder) {

    if(folderData.id == folderId && folderData.isFolder) {
        folderData.items.unshift({
            id: new Date().getTime(),
            name: item,
            isFolder,
            items: [],
        })
      return folderData
    }

    let latestRes = [];

    latestRes = folderData.items.map((obj) => (
         insertNode(obj, folderId, item, isFolder)
    ))
    return {...folderData, items: latestRes}
  }

  return { insertNode };
};

export { useTraverseTree };
