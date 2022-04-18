


// export interface Express {
//     user_id: string;
  
//  }
 
//  var persons: { [id: string]: IPerson; } = {
//     "p1": { firstName: "F1", lastName: "L1" },
//     "p2": { firstName: "F2" }
//  };

declare namespace Express{
    export interface Request{
        user_id: string;
        
    }
}

