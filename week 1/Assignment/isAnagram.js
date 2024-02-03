function isAnagram(str1, str2) {
 

    const sortStr1 = str1.split("").sort().join("");
    const sortStr2  = str2.split("").sort().join("");
  
    if((str1.length == str2.length) && (sortStr1 == sortStr2)) {
      console.log("Is Anagram");
  
    }
  
    else {
      console.log("Not Anagram");
    }
  
  
    
  }
  
  isAnagram("listen", "silent");