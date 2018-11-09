
export const actionTypes = {
  CREATE_NEW_DOABLE: 'CREATE_NEW_DOABLE'
}

export const createNewDoable = doable => ({
  type: actionTypes.CREATE_NEW_DOABLE,
  doable
})
