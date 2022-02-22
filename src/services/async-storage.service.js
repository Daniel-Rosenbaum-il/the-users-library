import { utilService } from "./util.service";

export const storageService = {
  query,
  post,
  put,
  remove,
  save,
};

function query(entityType) {
  var entities = JSON.parse(localStorage.getItem(entityType)) || [];
  return Promise.resolve(entities);
}

function post(entityType, newEntity) {
  newEntity.id = utilService.makeId();
  return query(entityType).then((entities) => {
    entities.push(newEntity);
    save(entityType, entities);
    return newEntity;
  });
}

function put(entityType, updatedEntity) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity.id === updatedEntity.id);
    entities.splice(idx, 1, updatedEntity);
    save(entityType, entities);
    return updatedEntity;
  });
}

function remove(entityType, entityId) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity.id === entityId);
    entities.splice(idx, 1);
    save(entityType, entities);
  });
}

function save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities));
}
