function getBio2() {
    let bioReq = new XMLHttpRequest();
    bioReq.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let gitObject = JSON.parse(this.responseText);
    document.getElementById("gitBio2").innerHTML = gitObject.bio2;
  }
          
        }
    };
    bioReq.open("GET", "https://api.github.com/users/Jgann123/repos", true);
    bioReq.send();
    };

    function getBio() {
      let bioReq = new XMLHttpRequest();
      bioReq.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            let myObject = JSON.parse(this.responseText);
              document.getElementById("gitBio").innerHTML = myObject[0].bio;
              
          }
      };
      bioReq.open("GET", "https://api.github.com/users/Jgann123/repos", true);
      bioReq.send();
      };

      function getBio() {
        let bioReq = new XMLHttpRequest();
        bioReq.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              let myObject = JSON.parse(this.responseText);
              document.getElementById("getEmail").innerHTML = myObject[0].email;
            }
     