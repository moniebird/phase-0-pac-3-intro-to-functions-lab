
function shout(string) {
  console.log (string.toLowerCase())
  return string.toUpperCase();
}
// ==> "Hello!".toUpperCase(); // 'HELLO!'


function whisper(string) {
 console.log (string.toLowerCase())
 return string.toLowerCase();  
}
// ==>  "HELLO!".toLowerCase(); // 'hello!'


  function logShout(string) {
      console.log (string.toUpperCase())
      return string.toUpperCase();
    }
    // ==>  "Hello!".toUpperCase(); // 'HELLO!'



    function logWhisper(string) {
      console.log (string.toLowerCase())
      return string.toLowerCase();
    }
// ==>  "HELLO!".toLowerCase(); // 'hello!'



function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
     return "I can't hear you!"
    }
    if (string === string.toUpperCase()) {
      return "YES INDEED!"
     }
     if (string ===  "Let's have dinner together!") {
      return "I would love to!"
     }
} 