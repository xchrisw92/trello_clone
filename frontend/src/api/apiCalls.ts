import axios from 'axios';
import {Item} from "../types/Item";

export const getAllTasks: Function = () =>{
  let response: object = {};
  axios.get('http://localhost:8080/api/tasks')
    .then(result =>{
      response = result.data;
    })
    .catch(error => {
      console.log(error);
    })
    .finally(()=>{
      return response;
    });
};

export const saveTask: Function = (task: string): number => {
  let result: number = 0;
  axios.post('http://localhost:8080/api/task', {title: task})
    .then(response => {
      result = response.status;
    }).catch(error => {
    console.log(error);
  });
  return result;
}