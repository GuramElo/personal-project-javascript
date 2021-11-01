import { nm_complect } from './!Important Transaction_class'; 

interface arr_scenario<T>{
  [index:number]:T;
}

export const scenario:arr_scenario<nm_complect.arr_value> = [
    {
        index: 1,
        meta: {
          title: 'Read popular customers',
          description: 'This action is responsible for reading the most popular customers'
          },
				// callback for main execution
        call: async (store:any) => {var t=90;
throw new Error("err");
        return 2;
        },
				// callback for rollback
        restore: async (store:any) => {
          throw new Error("err");
        }
    },
    {
        index: 2,
        meta: {
          title: 'Delete customer',
          description: 'This action is responsible for deleting customer'
        },
				// callback for main execution
        call: async (store:any) => {
          
         // throw new Error("asd");
        },
				// callback for rollback
        restore: async (store:any) => {
         // throw new Error("asd");
        }
    },
    {
        index: 0,
        meta: {
        title: 'Read popular customers',
        description: 'This action is responsible for reading the most popular customers'
        },
				// callback for main execution
        call: async (store:any) => {
          //throw new Error("hghh")
        },
				// callback for rollback
        restore: async (store:any) => {
          //throw new Error("hghh")
        }
    }
];