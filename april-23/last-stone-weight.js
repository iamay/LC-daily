// 24 April 2023
// 1046. Last Stone Weight

var lastStoneWeight = function(s) {
   while(s.length>1){
      s.sort((a,b)=>b-a);
      if(s[0]===s[1]){s.splice(0,2)}
      else{s[0]-=s[1]; s.splice(1,1);}
   }
   if(s[0]==undefined){return 0;}
   return s[0];
};
