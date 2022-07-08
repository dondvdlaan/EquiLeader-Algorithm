
'use strict';

// EQUILEADER 
//(with cortesy of Codelity https://app.codility.com/programmers/lessons/8-leader/equi_leader/)


const solution = (A) => {

   // console.log("InputA:", A);

   // ******************** Constant and variables ********************
   let len = A.length;
   let equiLeader = 0;
   let currentLeaderCount = 0;
   let B = [];
   let C = [];
   
   // ******************** Functions ********************
   /*
   *  Function to find the leader ( > n/2) in a sequence by taking out a pair of
   *  different elements till the leader(if it exits) remais.
   * 
   *  @input   Array    -  Sequence of n integers
   *  return   Object   - 2 Integers 1. Leader 2. Ocurrence of Leader in the sequence 
   */
   const findLeader = (A) => {

      // console.log("findLeader A", A)
      let len = A.length;
      let stack = [];
      let leader = NaN;
      let leaderCount = 0;

      for(let i = 0; i < len; i++){

         // Start filling stack
         stack.push(A[i]);

         // console.log("S",stack);
         
         /*
         *  When stack contains at least 2 elements, elements are compared and 
         *  cleared when different
         */
         if(stack.length > 1){
            if(stack[stack.length - 1] !=  stack[stack.length - 2]){
               stack.pop();
               stack.pop();
            }
         }
      }
      // Top of remaining stack is leader or empty
      leader = stack.pop();

      // Counting the ocurrences of leader in the sequence
      for(let i = 0; i < len; i++){
         if(A[i] == leader) leaderCount++;
         } 

   return {leader, leaderCount};    
   }
   
   // ******************** Main ********************
   // Find overall leader
   const {leader, leaderCount} = findLeader(A);
   
   // console.log("l=", leader)
   // console.log("lc=", leaderCount)

   // If sequence contains only 1 element, return 0 EquiLeaders
   if(len == 1) return 0;

   // Find Equileader (see specifications Codelity )
   if(leader != NaN ){
      let c1 = 0;
      let c2 = 0;

      for(let i = 0; i < len; i++){
         if(A[i] == leader) currentLeaderCount++;

         if (currentLeaderCount > (i+1)/2 ){
            c1++;
         } 
         
          if((leaderCount - currentLeaderCount) > (len-1-i)/2){
            c2++;
         }

         (c1 + c2 == 2)? equiLeader++ : equiLeader;
         c1 = 0;
         c2 = 0;

      }
   }

   return equiLeader ;     
 }

// Initialisation
const init = () => {
   
   // Test sequence
   let A = [4,3,4,4,4,2];
   
   console.log("Nr. of EquiLeaders: ",solution(A));

}

// INIT
init();
