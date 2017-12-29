var recipes = {}

function updateObjectWithKeyAndValue(object, key, value)
{
object.assign({key: 'value'})
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value)
{
  object[key] = value
  return object
}

function deleteFromObjectByKey(object,key)
{
  return
}

function destructivelyDeleteFromObjectByKey(object,key)
{
  return
}