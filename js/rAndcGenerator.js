const convertToFullYear = function (data) {
  return new Date(data).getFullYear();
};
function capitalizeFirstLetter(string) {
  const wordsInString = string?.toLowerCase().split(" ");
  const fixedString = wordsInString
    ?.map((stringVal) => stringVal.charAt(0).toUpperCase() + stringVal.slice(1))
    .join(" ");
  return fixedString;
}
const useInitial = function (data) {
  return data
    ?.split(" ")
    .map((val) => val[0])
    .join("")
    .toString()
    .toUpperCase();
};

export const createPdfMarckup = function (data) {
  let marckup = "";

  if (data.template.type === "letter") {
    if (data.template.template === "letter1") {
      marckup = `
     <div class="template rl template1 letter cover cover1" id="${data._id}">
  
  <div class="user-name-and-profession">
    <h1 class="user-name">${data.fullName}</h1>
    ${
      data.profession
        ? `
      <p class="profession">${data.profession}</p>
      `
        : ""
    }
    
  </div>
  
 
     ${
       data.images
         ? `
         <div class="passportDateOfBirth">
         <div class="passport-box">
         <img
            src="${data.images.url}"
            alt=""
            class="passport"
           
            
            
            />
            </div>
            </div>`
         : ""
     } 
   
  
  <div class="large-content">
    <div class="letterContainer" >
      <ul>
        ${
          data.receipient
            ? `<li class="shouldNotBreak">${data.receipient}</li>`
            : ""
        }
        ${
          data.compenyname
            ? `<li class="shouldNotBreak">${data.compenyname}</li>`
            : ""
        }
        ${
          data.streetaddress
            ? `<li class="shouldNotBreak">${data.streetaddress}</li>`
            : ""
        }
        <li class="shouldNotBreak">${data.city ? data.city + "," : ""} ${
        data.state ? data.state : ""
      }</li>
        <li class="shouldNotBreak">${new Date(data.date).toDateString()}</li>
      </ul>
      <br />
      <div contenteditable="false" id="letter">
        ${data.theletter.replaceAll("\n", "<br />")}
      </div>
    </div>
  </div>
 
  
  <div class="tiny-content">
    <div class="contact-information informationContainer">
     
      <div class="content-wrapper">
        ${
          data.email
            ? `<div class="information">
          <p class="inforLabel"><i class="fa fa-envelope infor-logo" aria-hidden="true"></i></p>
          <p class="inforVal">${data.email}</p>
        </div>`
            : ""
        }
      ${
        data.phoneNumber
          ? `
        <div class="information">
           <p class="inforLabel"><i class="fa fa-phone-square infor-logo" aria-hidden="true"></i></p>
          <p class="inforVal">${data.phoneNumber}</p>
        </div>`
          : ""
      }
       
${
  data.address
    ? `
        <div class="information">
           <p class="inforLabel"><i class="fa fa-map-marker infor-logo" aria-hidden="true"></i></p>
          <p class="inforVal">${data.address}</p>
        </div>`
    : ""
}
      </div>
    </div>
  </div>
  </div>
  `;
    }
    if (data.template.template === "letter2") {
      marckup = `
  <div class="template rl template2 letter cover cover2" id="${data._id}">
  
  <div class="user-name-and-profession">
  ${
    data.images
      ? `
      <div class="passportDateOfBirth">
      <div class="passport-box">
      <img
         src="${data.images.url}"
         alt=""
         class="passport"
        
         
         
         />
         </div>
         </div>`
      : ""
  } 
    <h1 class="user-name">${data.fullName}</h1>
    ${
      data.profession
        ? `
      <p class="profession">${data.profession}</p>
      `
        : ""
    }
    <div class="contact-information informationContainer">
     
      <div class="content-wrapper">
        ${
          data.email
            ? `<div class="information">
          <p class="inforLabel"><i class="fa fa-envelope infor-logo" aria-hidden="true"></i></p>
          <p class="inforVal">${data.email}</p>
        </div>`
            : ""
        }
  ${
    data.phoneNumber
      ? `
        <div class="information">
           <p class="inforLabel"><i class="fa fa-phone-square infor-logo" aria-hidden="true"></i></p>
          <p class="inforVal">${data.phoneNumber}</p>
        </div>`
      : ""
  }
${
  data.address
    ? `  
        <div class="information">
           <p class="inforLabel"><i class="fa fa-map-marker infor-logo" aria-hidden="true"></i></p>
          <p class="inforVal">${data.address}</p>
        </div>`
    : ""
}
      </div>
    </div>
  </div>
 
  
  <div class="large-content">
    <div class="letterContainer" >
      <ul>
        ${
          data.receipient
            ? `<li class="shouldNotBreak">${data.receipient}</li>`
            : ""
        }
        ${
          data.compenyname
            ? `<li class="shouldNotBreak">${data.compenyname}</li>`
            : ""
        }
        ${
          data.streetaddress
            ? `<li class="shouldNotBreak">${data.streetaddress}</li>`
            : ""
        }
        <li class="shouldNotBreak">${data.city ? data.city + "," : ""} ${
        data.state ? data.state : ""
      }</li>
        <li class="shouldNotBreak">${new Date(data.date).toDateString()}</li>
      </ul>
      <br />
      <div contenteditable="false" id="letter">
        ${data.theletter.replaceAll("\n", "<br />")}
      </div>
    </div>
  </div>
  </div>`;
    }
    if (data.template.template === "letter3") {
      marckup = `<div class="template rl template3 letter cover cover3" id="${
        data._id
      }">
  
  
  <div class="large-profile">
  ${
    data.images
      ? `
      <div class="passportDateOfBirth">
      <div class="passport-box">
      <img
         src="${data.images.url}"
         alt=""
         class="passport"
        
         
         
         />
         </div>
         </div>`
      : ""
  } 
  
    <div class="contact-information informationContainer">
      <div class="content-wrapper">
        ${
          data.email
            ? `<div class="information">
          <p class="inforLabel"><i class="fa fa-envelope infor-logo" aria-hidden="true"></i></p>
          <p class="inforVal">${data.email}</p>
        </div>`
            : ""
        }
  ${
    data.phoneNumber
      ? `
        <div class="information">
           <p class="inforLabel"><i class="fa fa-phone-square infor-logo" aria-hidden="true"></i></p>
          <p class="inforVal">${data.phoneNumber}</p>
        </div>`
      : ""
  }
${
  data.address
    ? `  
        <div class="information">
           <p class="inforLabel"><i class="fa fa-map-marker infor-logo" aria-hidden="true"></i></p>
          <p class="inforVal">${data.address}</p>
        </div>`
    : ""
}
      </div>
    </div>
  </div>
  
  <div class="user-name-and-profession">
  ${
    data.profession
      ? `
    <p class="profession">${data.profession}</p>
    `
      : ""
  }
    <h1 class="user-name">${data.fullName}</h1>
  </div>
  
  <div class="large-content">
    <div class="letterContainer" >
      <ul>
        ${
          data.receipient
            ? `<li class="shouldNotBreak">${data.receipient}</li>`
            : ""
        }
        ${
          data.compenyname
            ? `<li class="shouldNotBreak">${data.compenyname}</li>`
            : ""
        }
        ${
          data.streetaddress
            ? `<li class="shouldNotBreak">${data.streetaddress}</li>`
            : ""
        }
        <li class="shouldNotBreak">${data.city ? data.city + "," : ""} ${
        data.state ? data.state : ""
      }</li>
        <li class="shouldNotBreak">${new Date(data.date).toDateString()}</li>
      </ul>
      <br />
      <div contenteditable="false" id="letter">
        ${data.theletter.replaceAll("\n", "<br />")}
      </div>
    </div>
  </div>
  </div>
  `;
    }
    if (data.template.template === "letter4") {
      marckup = `<div class="template rl template4 letter cover cover4" id="${
        data._id
      }">
  
  <div class="contact-information informationContainer">
    <div class="contact-container">
      <div class="content-wrapper">
        ${
          data.email
            ? `<div class="information">
          <p class="inforLabel"><i class="fa fa-envelope infor-logo" aria-hidden="true"></i></p>
          <p class="inforVal">${data.email}</p>
        </div>`
            : ""
        }
  ${
    data.phoneNumber
      ? `
        <div class="information">
           <p class="inforLabel"><i class="fa fa-phone-square infor-logo" aria-hidden="true"></i></p>
          <p class="inforVal">${data.phoneNumber}</p>
        </div>`
      : ""
  }
${
  data.address
    ? `  
        <div class="information">
           <p class="inforLabel"><i class="fa fa-map-marker infor-logo" aria-hidden="true"></i></p>
          <p class="inforVal">${data.address}</p>
        </div>`
    : ""
}
        ${
          data.profession
            ? `
          <p class="profession">${data.profession}</p>
          `
            : ""
        }
      </div>
  
      <div class="content-wrapper secondContent">
        <div class="user-name-and-profession">
        ${
          data.images
            ? `
            <div class="passportDateOfBirth">
            <div class="passport-box">
            <img
               src="${data.images.url}"
               alt=""
               class="passport"
              
               
               
               />
               </div>
               </div>`
            : ""
        } 
      
  
          <h1 class="user-name">${data.fullName}</h1>
        </div>
      </div>
    </div>
  </div>
  
  <div class="large-content">
    <div class="letterContainer" >
      <ul>
        ${
          data.receipient
            ? `<li class="shouldNotBreak">${data.receipient}</li>`
            : ""
        }
        ${
          data.compenyname
            ? `<li class="shouldNotBreak">${data.compenyname}</li>`
            : ""
        }
        ${
          data.streetaddress
            ? `<li class="shouldNotBreak">${data.streetaddress}</li>`
            : ""
        }
        <li class="shouldNotBreak">${data.city ? data.city + "," : ""} ${
        data.state ? data.state : ""
      }</li>
        <li class="shouldNotBreak">${new Date(data.date).toDateString()}</li>
      </ul>
      <br />
      <div contenteditable="false" id="letter">
        ${data.theletter.replaceAll("\n", "<br />")}
      </div>
    </div>
  </div>
  </div>
  `;
    }
    if (data.template.template === "letter5") {
      marckup = `<div class="template rl template5 letter cover cover5" id="${
        data._id
      }">
  
  
  <div class="tiny-content">
  ${
    data.images
      ? `
      <div class="passportDateOfBirth">
      <div class="passport-box">
      <img
         src="${data.images.url}"
         alt=""
         class="passport"
        
         
         
         />
         </div>
         </div>`
      : ""
  } 
    <div class="contact-information informationContainer">
      <div class="content-wrapper">
        ${
          data.email
            ? `<div class="information">
          <p class="inforLabel"><i class="fa fa-envelope infor-logo" aria-hidden="true"></i></p>
          <p class="inforVal">${data.email}</p>
        </div>`
            : ""
        }
  ${
    data.phoneNumber
      ? `
        <div class="information">
           <p class="inforLabel"><i class="fa fa-phone-square infor-logo" aria-hidden="true"></i></p>
          <p class="inforVal">${data.phoneNumber}</p>
        </div>`
      : ""
  }
${
  data.address
    ? `  
        <div class="information">
           <p class="inforLabel"><i class="fa fa-map-marker infor-logo" aria-hidden="true"></i></p>
          <p class="inforVal">${data.address}</p>
        </div>`
    : ""
}
      </div>
    </div>
  </div>
  <div class="user-name-and-profession">
  <h1 class="user-name">${data.fullName}</h1>
  ${
    data.profession
      ? `
    <p class="profession">${data.profession}</p>
    `
      : ""
  }
</div>
  <ul>
  ${data.receipient ? `<li class="shouldNotBreak">${data.receipient}</li>` : ""}
  ${
    data.compenyname
      ? `<li class="shouldNotBreak">${data.compenyname}</li>`
      : ""
  }
  ${
    data.streetaddress
      ? `<li class="shouldNotBreak">${data.streetaddress}</li>`
      : ""
  }
  <li class="shouldNotBreak">${data.city ? data.city + "," : ""} ${
        data.state ? data.state : ""
      }</li>
  <li class="shouldNotBreak">${new Date(data.date).toDateString()}</li>
  </ul>
  <div class="large-content">
    <div class="letterContainer" >
      <div contenteditable="false" id="letter">
        ${data.theletter.replaceAll("\n", "<br />")}
      </div>
    </div>
  </div>
  </div>
  
  `;
    }
    if (data.template.template === "letter6") {
      marckup = `
  
  
  <div class="template rl template6 letter cover cover6" id="${data._id}">
  
  
  <div class="user-name-and-profession">
    <h1 class="user-name">${data.fullName}</h1>
    ${
      data.profession
        ? `
      <p class="profession">${data.profession}</p>
      `
        : ""
    }
  </div>
  <div class="large-content">
    <div class="letterContainer" >
      <ul>
        ${
          data.receipient
            ? `<li class="shouldNotBreak">${data.receipient}</li>`
            : ""
        }
        ${
          data.compenyname
            ? `<li class="shouldNotBreak">${data.compenyname}</li>`
            : ""
        }
        ${
          data.streetaddress
            ? `<li class="shouldNotBreak">${data.streetaddress}</li>`
            : ""
        }
        <li class="shouldNotBreak">${data.city ? data.city + "," : ""} ${
        data.state ? data.state : ""
      }</li>
        <li class="shouldNotBreak">${new Date(data.date).toDateString()}</li>
      </ul>
      <br />
      <div contenteditable="false" id="letter">
        ${data.theletter.replaceAll("\n", "<br />")}
      </div>
    </div>
  </div>
  
  <div class="tiny-content">
    <div class="contact-information informationContainer">
     
      <div class="content-wrapper">
        ${
          data.email
            ? `<div class="information">
          <p class="inforLabel"><i class="fa fa-envelope infor-logo" aria-hidden="true"></i></p>
          <p class="inforVal">${data.email}</p>
        </div>`
            : ""
        }
  ${
    data.phoneNumber
      ? `
        <div class="information">
           <p class="inforLabel"><i class="fa fa-phone-square infor-logo" aria-hidden="true"></i></p>
          <p class="inforVal">${data.phoneNumber}</p>
        </div>`
      : ""
  }
${
  data.address
    ? `  
        <div class="information">
           <p class="inforLabel"><i class="fa fa-map-marker infor-logo" aria-hidden="true"></i></p>
          <p class="inforVal">${data.address}</p>
        </div>`
    : ""
}
      </div>
    </div>
  </div>
  
  ${
    data.images
      ? `
      <div class="passportDateOfBirth">
      <div class="passport-box">
      <img
         src="${data.images.url}"
         alt=""
         class="passport"
        
         
         
         />
         </div>
         </div>`
      : ""
  } 
  </div>
  `;
    }
  }

  if (data.template.type === "resume") {
    if (data.template.template === "resume1") {
      marckup = `<div id="${data._id}" class="template resume rl template1">
      <div class="user-name-and-profession">
      <h1 class="user-name">${data.fullName}</h1>
         <p class="profession">${data.profession}</p>
       </div>
  
         <div class="passportDateOfBirth">
          <div class="passport-box">
          ${
            data.images
              ? `<img
            src="${data.images.url}"
            alt=""
            class="passport"
           
            
            
            />`
              : `<h1 class="initials">${useInitial(data.fullName)}</h1>`
          } 
          </div>
  
          <div class="date-of-birth">
            <p class="dateOfBirth">date of birth:</p>
            <p>${data.dateofbirth}</p>
          </div>
  
        </div>
  
       <div class="large-content">
       
       ${
         data.profile
           ? ` <div class="profile informationContainer">
           <h3 class="inforHeader shouldNotBreak">Profile</h3>
           <p>
           ${data.profile}  
           </p>
         </div>`
           : ""
       }
  
  
  
       ${
         data.experiences.length !== 0
           ? `
      <div class="recent-experience informationContainer">
      <h3 class="inforHeader shouldNotBreak">Experience</h3>${data.experiences
        .map((experience) => {
          return `${
            Object.keys(experience).length !== 0
              ? `<div class="experience content-wrapper">
      <div class="start-and-end-date shouldNotBreak">
      ${
        experience.experiencestarts
          ? ` <p class="start">${experience.experiencestarts}</p>`
          : ""
      }
      ${experience.experienceends ? ` <p class="end">to</p>` : ""}  
       ${
         experience.experienceends
           ? ` <p class="end">${experience.experienceends}</p>`
           : ""
       }  
         
        </div>
         <div class="box-for-title-and-org shouldNotBreak">
        ${
          experience.jobTitle
            ? ` <p class="jobtitle">${experience.jobTitle}</p>/`
            : ""
        }
        ${
          experience.orgAddress
            ? ` <p class="organizationAndAddress">${experience.orgAddress}</p>`
            : ""
        }
        <div class="box-for-org-city-and-org">
        
        ${
          experience.orgCity
            ? `<p class="organizationAndAddress">${
                experience.orgCity + " /"
              }</p>`
            : ""
        }
        ${
          experience.orgState
            ? ` <p class="sorgState">${experience.orgState}</p>`
            : ""
        }
        </div>   
  
        
        </div>
       ${
         findDuty(experience.experience) !== undefined &&
         findDuty(experience.experience) !== null
           ? findDuty(experience.experience)
           : ""
       }
      
  
      </div>`
              : ""
          }`;
        })
        .join("")}
  
        
           
      </div>`
           : ""
       }
     
         
  
  ${
    data.educations.length !== 0
      ? `
  <div class="educational-background informationContainer">
  <h3 class="inforHeader shouldNotBreak">Education</h3>
  
  ${data.educations
    .map((edu) => {
      return `<div class="education content-wrapper">
      <span></span>
      <div class="start-and-end-date shouldNotBreak">
      ${
        edu.educationstarts ? `<p class="start">${edu.educationstarts}</p>` : ""
      }
        
        
        ${
          edu.educationends
            ? `<p>to</p><p class="end">${edu.educationends}</p>`
            : ""
        }
        
      </div>
    <p class="qualification shouldNotBreak">${
      edu.qualification ? edu.qualification : ""
    }</p>
    <p class="school-and-address shouldNotBreak">
    ${edu.eduAndAddress ? edu.eduAndAddress : ""}
    </p>
    </div>
    `;
    })
    .join("")}
    
    </div>
    `
      : ""
  }
  
  
  
  
  ${
    data.certifications.length !== 0
      ? `
      <div class="certification informationContainer">
    <h3 class="inforHeader shouldNotBreak">Certification</h3>
    <ul class="content-wrapper">
    ${data.certifications
      .map((cert) => `<li class="shouldNotBreak">${cert}</li>`)
      .join("")}
    </ul>
    </div>
    `
      : ""
  }
  </div>
  
  <div class="tiny-content">
  
  <div class="contact-information informationContainer">
  <h3 class="inforHeader shouldNotBreak">Contact information</h3>
  <div class="content-wrapper">
  ${
    data.address
      ? `<div class="information">
     <p class="inforLabel"><i class="fa fa-map-marker infor-logo" aria-hidden="true"></i></p>
    <p class="inforVal">${data.address}</p>
  </div>
    `
      : ""
  }
  
    
     ${
       data.country
         ? `
      <div class="information">
        <p class="inforLabel"><i class="fa fa-flag-checkered infor-logo" aria-hidden="true"></i></p> 
      <p class="inforVal">${data.country}</p>
    </div>`
         : ""
     }
     ${
       data.state
         ? `
      <div class="information">
           <p class="inforLabel"><i class="fa fa-home infor-logo" aria-hidden="true"></i></p> 
      <p class="inforVal">${data.state}</p>
    </div>`
         : ""
     }
     ${
       data.gender
         ? `<div class="information">
           <p class="inforLabel"><i class="fa fa-user infor-logo" aria-hidden="true"></i></p> 
      <p class="inforVal">${data.gender}</p>
    </div>`
         : ""
     }
    
    ${
      data.maritalstatus
        ? `<div class="information">
          <p class="inforLabel"><i class="fa fa-users infor-logo" aria-hidden="true"></i></p> 
      <p class="inforVal">${data.maritalstatus}</p>
    </div>
      `
        : ""
    }
    ${
      data.phoneNumber
        ? ` <div class="information">
       <p class="inforLabel"><i class="fa fa-phone-square infor-logo" aria-hidden="true"></i></p>
      <p class="inforVal">${data.phoneNumber}</p>
    </div>`
        : ""
    }
    ${
      data.email
        ? `<div class="information">
        <p class="inforLabel"><i class="fa fa-envelope infor-logo" aria-hidden="true"></i></p>
        <p class="inforVal">${data.email}</p>
      </div>
      `
        : ""
    } 
      </div>
  
        </div>
  
  
         ${
           data.twitter || data.instagram || data.facebook || data.linkedin
             ? `
    <div class="social-media-links informationContainer">
    <h3 class="inforHeader shouldNotBreak">Social media links</h3>
    <div class="content-wrapper">
    ${
      data.facebook
        ? `<div class="information">
        <p class="inforLabel"><img class="infor-logo" src="img/fb-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.facebook}</p>
      </div>`
        : ""
    }
    ${
      data.instagram
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/ig-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.instagram}</p>
      </div>`
        : ""
    }
    
    ${
      data.twitter
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/twitter-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.twitter}</p>
      </div>`
        : ""
    }
    ${
      data.linkedin
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/linkedin-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.linkedin}</p>
      </div>`
        : ""
    }
    </div>
    </div>
    `
             : ""
         }
  
  ${
    data.skills.length !== 0
      ? `   <div class="skills informationContainer">
    <h3 class="inforHeader shouldNotBreak">Skills</h3>
    <ul class="content-wrapper">
    ${data.skills
      .map(
        (skill) => `${skill ? `<li class="shouldNotBreak">${skill}</li>` : ""}`
      )
      .join("")}
      </ul>
      </div>
      `
      : ""
  }
        
        ${
          data.interest.length !== 0
            ? `   <div class="interest informationContainer">
          <h3 class="inforHeader shouldNotBreak">Interest</h3>
          <ul class="content-wrapper">
          ${data.interest
            .map((intr) => `<li class="shouldNotBreak">${intr}</li>`)
            .join("")}
          </ul></div>`
            : ""
        }
        ${
          data.languages.length !== 0
            ? `
          <div class="languages informationContainer">
          <h3 class="inforHeader shouldNotBreak">Languages</h3>
        ${data.languages
          .map(
            (val) => `
            ${
              val.language
                ? `
              <div class="language content-wrapper">
              <p class="theLang shouldNotBreak">${val.language}</p>
              <div class="theLevel shouldNotBreak"><span class="theLevelLoader" style="width: ${val.level};"></span></div>
              </div> 
              `
                : ""
            }
        
        `
          )
          .join("")}
          </div>
          `
            : ""
        }
        ${
          data.reffrences.length !== 0
            ? `<div class="references informationContainer">
            
       <h3 class="inforHeader shouldNotBreak">Refrence</h3>
       ${data.reffrences
         .map((ref) => {
           if (ref.language || ref.langLevel) return;
           return `
           <div class="reference content-wrapper">
           <span></span>
           ${
             ref.refrenceName
               ? `<p class="refName shouldNotBreak">${ref.refrenceName}</p>`
               : ""
           }
           ${
             ref.referenceTitleAndOrg
               ? `<p class="titleandorg shouldNotBreak">${ref.referenceTitleAndOrg} </p>`
               : ""
           }
           ${
             ref.refrenceEmail
               ? ` <p class="email shouldNotBreak">${ref.refrenceEmail}</p>`
               : ""
           }
            </div>
 `;
         })
         .join("")}
 
         </div>
         `
            : ""
        }
       
        </div>
          
        </div>
        `;
    }
    if (data.template.template === "resume2") {
      marckup = `  <div id="${data._id}" class="template resume rl template2">
      
    <div class="user-name-and-profession">
      <h1 class="user-name">${data.fullName}</h1>
      <p class="profession">${data.profession}</p>
    </div>
    <div class="tiny-content">
         <div class="passportDateOfBirth">
         ${
           data.images
             ? `
            <div class="passport-box">
              <img
            src="${data.images.url}"
            alt=""
            class="passport"
           
            
            
            />
            </div>
            `
             : `<h1 class="initials">${useInitial(data.fullName)}</h1>`
         } 
          <div class="date-of-birth">
            <p class="dateOfBirth">date of birth:</p>
            <p>${data.dateofbirth}</p>
          </div>
        </div>
  
  
        <div class="contact-information informationContainer">
        <h3 class="inforHeader shouldNotBreak">Contact information</h3>
        <div class="content-wrapper">
        ${
          data.address
            ? `<div class="information">
           <p class="inforLabel"><i class="fa fa-map-marker infor-logo" aria-hidden="true"></i></p>
          <p class="inforVal">${data.address}</p>
        </div>
          `
            : ""
        }
        
          
           ${
             data.country
               ? `
            <div class="information">
              <p class="inforLabel"><i class="fa fa-flag-checkered infor-logo" aria-hidden="true"></i></p> 
      
            <p class="inforVal">${data.country}</p>
          </div>`
               : ""
           }
      
           ${
             data.state
               ? `
            <div class="information">
                 <p class="inforLabel"><i class="fa fa-home infor-logo" aria-hidden="true"></i></p> 
      
            <p class="inforVal">${data.state}</p>
          </div>`
               : ""
           }
      
           ${
             data.gender
               ? `<div class="information">
                 <p class="inforLabel"><i class="fa fa-user infor-logo" aria-hidden="true"></i></p> 
      
            <p class="inforVal">${data.gender}</p>
          </div>`
               : ""
           }
          
          ${
            data.maritalstatus
              ? `<div class="information">
                <p class="inforLabel"><i class="fa fa-users infor-logo" aria-hidden="true"></i></p> 
      
            <p class="inforVal">${data.maritalstatus}</p>
          </div>
            `
              : ""
          }
          ${
            data.phoneNumber
              ? ` <div class="information">
             <p class="inforLabel"><i class="fa fa-phone-square infor-logo" aria-hidden="true"></i></p>
            <p class="inforVal">${data.phoneNumber}</p>
          </div>`
              : ""
          }
          ${
            data.email
              ? `<div class="information">
              <p class="inforLabel"><i class="fa fa-envelope infor-logo" aria-hidden="true"></i></p>
              <p class="inforVal">${data.email}</p>
            </div>
            `
              : ""
          }
        </div>
      </div>
  
  
  
        ${
          data.twitter || data.instagram || data.facebook || data.linkedin
            ? `
    <div class="social-media-links informationContainer">
    <h3 class="inforHeader shouldNotBreak">Social media links</h3>
    <div class="content-wrapper">
    ${
      data.facebook
        ? `<div class="information">
        <p class="inforLabel"><img class="infor-logo" src="img/fb-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.facebook}</p>
      </div>`
        : ""
    }
    ${
      data.instagram
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/ig-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.instagram}</p>
      </div>`
        : ""
    }
    
    ${
      data.twitter
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/twitter-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.twitter}</p>
      </div>`
        : ""
    }
    ${
      data.linkedin
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/linkedin-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.linkedin}</p>
      </div>`
        : ""
    }
    </div>
    </div>
  `
            : ""
        }
  
     ${
       data.skills.length !== 0
         ? `   <div class="skills informationContainer">
      <h3 class="inforHeader shouldNotBreak">Skills</h3>
      <ul class="content-wrapper">
      ${data.skills
        .map((skill) => `<li class="shouldNotBreak">${skill}</li>`)
        .join("")}
      </ul></div>`
         : ""
     }
  
        ${
          data.interest.length !== 0
            ? `   <div class="interest informationContainer">
          <h3 class="inforHeader shouldNotBreak">Interest</h3>
          <ul class="content-wrapper">
          ${data.interest
            .map((intr) => {
              return `<li class="shouldNotBreak">${intr}</li>`;
            })
            .join("")}
        </ul></div>`
            : ""
        }
        ${
          data.languages.length !== 0
            ? `
          <div class="languages informationContainer">
          <h3 class="inforHeader shouldNotBreak">Languages</h3>
        ${data.languages
          .map(
            (val) => `
            ${
              val.language
                ? `
              <div class="language content-wrapper">
              <p class="theLang shouldNotBreak">${val.language}</p>
              <div class="theLevel shouldNotBreak"><span class="theLevelLoader" style="width: ${val.level};"></span></div>
              </div> 
              `
                : ""
            }
        
        `
          )
          .join("")}
          </div>
          `
            : ""
        }
        ${
          data.reffrences.length !== 0
            ? `
        <div class="references informationContainer">
        <h3 class="inforHeader shouldNotBreak">Refrence</h3>
           ${data.reffrences
             .map((ref) => {
               if (ref.language || ref.langLevel) return;
               return `
               <div class="reference content-wrapper">
               <span></span>
               ${
                 ref.refrenceName
                   ? `<p class="refName shouldNotBreak">${ref.refrenceName}</p>`
                   : ""
               }
               ${
                 ref.referenceTitleAndOrg
                   ? `<p class="titleandorg shouldNotBreak">${ref.referenceTitleAndOrg} </p>`
                   : ""
               }
               ${
                 ref.refrenceEmail
                   ? ` <p class="email shouldNotBreak">${ref.refrenceEmail}</p>`
                   : ""
               }
                </div>
     `;
             })
             .join("")}
     
     </div>
     `
            : ""
        }
       
      </div>
      
  
      <div class="large-content">
     ${
       data.profile
         ? `<div class="profile informationContainer">
           <h3 class="inforHeader shouldNotBreak">Profile</h3>
           <p>
           ${data.profile}  
           </p>
         </div>
      `
         : ""
     }
  
     ${
       data.experiences.length !== 0
         ? `
    <div class="recent-experience informationContainer">
    <h3 class="inforHeader shouldNotBreak">Experience</h3>${data.experiences
      .map((experience) => {
        return `${
          Object.keys(experience).length !== 0
            ? `<div class="experience content-wrapper">
    <div class="start-and-end-date shouldNotBreak">
    ${
      experience.experiencestarts
        ? ` <p class="start">${experience.experiencestarts}</p>`
        : ""
    }
    ${experience.experienceends ? ` <p class="end">to</p>` : ""}  
     ${
       experience.experienceends
         ? ` <p class="end">${experience.experienceends}</p>`
         : ""
     }  
       
      </div>
       <div class="box-for-title-and-org shouldNotBreak">
      ${
        experience.jobTitle
          ? ` <p class="jobtitle">${experience.jobTitle}</p>/`
          : ""
      }
      ${
        experience.orgAddress
          ? ` <p class="organizationAndAddress">${experience.orgAddress}</p>`
          : ""
      }
      <div class="box-for-org-city-and-org">
      ${
        experience.orgCity
          ? `<p class="organizationAndAddress">${experience.orgCity + " /"}</p>`
          : ""
      }
      ${
        experience.orgState
          ? ` <p class="sorgState">${experience.orgState}</p>`
          : ""
      }
     
    
      </div>   
      
      </div>
   ${
     findDuty(experience.experience) !== undefined &&
     findDuty(experience.experience) !== null
       ? findDuty(experience.experience)
       : ""
   }
    </div>`
            : ""
        }`;
      })
      .join("")}
      
         
    </div>`
         : ""
     }
   
  
  
  ${
    data.educations.length !== 0
      ? `
  <div class="educational-background informationContainer">
  <h3 class="inforHeader shouldNotBreak">Education</h3>
  ${data.educations
    .map((edu) => {
      return `<div class="education content-wrapper">
      <span></span>
      <div class="start-and-end-date shouldNotBreak">
      ${
        edu.educationstarts ? `<p class="start">${edu.educationstarts}</p>` : ""
      }
        
        
        ${
          edu.educationends
            ? `<p>to</p><p class="end">${edu.educationends}</p>`
            : ""
        }
        
      </div>
  <p class="qualification shouldNotBreak">${
    edu.qualification ? edu.qualification : ""
  }</p>
  <p class="school-and-address shouldNotBreak">
  ${edu.eduAndAddress ? edu.eduAndAddress : ""}
  </p>
  </div>
  `;
    })
    .join("")}
  
  </div>
  `
      : ""
  }
  ${
    data.certifications.length !== 0
      ? `
  <div class="certification informationContainer">
      <h3 class="inforHeader shouldNotBreak">Certification</h3>
      <ul class="content-wrapper">
      ${data.certifications
        .map((cert) => `<li class="shouldNotBreak">${cert}</li>`)
        .join("")}
      </ul>
      </div>
      `
      : ""
  }
      </div>
      </div>`;
    }
    if (data.template.template === "resume3") {
      marckup = ` <div id="${data._id}" class="template resume rl template3"> 
      
      <div class="large-profile">
        <div class="passportDateOfBirth">
         
          ${
            data.images
              ? ` <div class="passport-box"><img
            src="${data.images.url}"
            alt=""
            class="passport"
           
            
            
            />
            </div>
            `
              : `<h1 class="initials">${useInitial(data.fullName)}</h1>`
          } 
          <div class="date-of-birth">
            <p class="dateOfBirth">date of birth:</p>
            <p>${data.dateofbirth}</p>
          </div>
        </div>
  
      ${
        data.profile
          ? `
        <div class="profile informationContainer">
      <h3 class="inforHeader shouldNotBreak">Profile</h3>
      <p>
      ${data.profile}  
      </p>
      </div>`
          : ""
      }
      
      </div>
      <div class="user-name-and-profession">
      <p class="profession">${data.profession}</p>
         <h1 class="user-name">${data.fullName}</h1>
       </div>
  
  
      <div class="tiny-content">
  
        <div class="contact-information informationContainer">
        <h3 class="inforHeader shouldNotBreak">Contact information</h3>
        <div class="content-wrapper">
        ${
          data.address
            ? `<div class="information">
           <p class="inforLabel"><i class="fa fa-map-marker infor-logo" aria-hidden="true"></i></p>
          <p class="inforVal">${data.address}</p>
        </div>
          `
            : ""
        }
        
          
           ${
             data.country
               ? `
            <div class="information">
              <p class="inforLabel"><i class="fa fa-flag-checkered infor-logo" aria-hidden="true"></i></p> 
      
            <p class="inforVal">${data.country}</p>
          </div>`
               : ""
           }
      
           ${
             data.state
               ? `
            <div class="information">
                 <p class="inforLabel"><i class="fa fa-home infor-logo" aria-hidden="true"></i></p> 
      
            <p class="inforVal">${data.state}</p>
          </div>`
               : ""
           }
      
           ${
             data.gender
               ? `<div class="information">
                 <p class="inforLabel"><i class="fa fa-user infor-logo" aria-hidden="true"></i></p> 
      
            <p class="inforVal">${data.gender}</p>
          </div>`
               : ""
           }
          
          ${
            data.maritalstatus
              ? `<div class="information">
                <p class="inforLabel"><i class="fa fa-users infor-logo" aria-hidden="true"></i></p> 
      
            <p class="inforVal">${data.maritalstatus}</p>
          </div>
            `
              : ""
          }
          ${
            data.phoneNumber
              ? ` <div class="information">
             <p class="inforLabel"><i class="fa fa-phone-square infor-logo" aria-hidden="true"></i></p>
            <p class="inforVal">${data.phoneNumber}</p>
          </div>`
              : ""
          }
          ${
            data.email
              ? `<div class="information">
              <p class="inforLabel"><i class="fa fa-envelope infor-logo" aria-hidden="true"></i></p>
              <p class="inforVal">${data.email}</p>
            </div>
            `
              : ""
          }
         
        </div>
      </div>
  
  
  
        ${
          data.twitter || data.instagram || data.facebook || data.linkedin
            ? `
    <div class="social-media-links informationContainer">
    <h3 class="inforHeader shouldNotBreak">Social media links</h3>
    <div class="content-wrapper">
    ${
      data.facebook
        ? `<div class="information">
        <p class="inforLabel"><img class="infor-logo" src="img/fb-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.facebook}</p>
      </div>`
        : ""
    }
    ${
      data.instagram
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/ig-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.instagram}</p>
      </div>`
        : ""
    }
    
    ${
      data.twitter
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/twitter-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.twitter}</p>
      </div>`
        : ""
    }
    ${
      data.linkedin
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/linkedin-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.linkedin}</p>
      </div>`
        : ""
    }
  
    </div>
    </div>
  `
            : ""
        }
  
     ${
       data.skills.length !== 0
         ? `   <div class="skills informationContainer">
      <h3 class="inforHeader shouldNotBreak">Skills</h3>
      <ul class="content-wrapper">
      ${data.skills
        .map(
          (skill) =>
            `${skill ? `<li class="shouldNotBreak">${skill}</li>` : ""}`
        )
        .join("")}
      </ul>
      </div>
      `
         : ""
     }
  
       
      ${
        data.interest.length !== 0
          ? `   <div class="interest informationContainer">
        <h3 class="inforHeader shouldNotBreak">Interest</h3>
        <ul class="content-wrapper">
        ${data.interest
          .map((intr) => `<li class="shouldNotBreak">${intr}</li>`)
          .join("")}
      </ul></div>`
          : ""
      }
      ${
        data.languages.length !== 0
          ? `
        <div class="languages informationContainer">
        <h3 class="inforHeader shouldNotBreak">Languages</h3>
      ${data.languages
        .map(
          (val) => `
          ${
            val.language
              ? `
            <div class="language content-wrapper">
            <p class="theLang shouldNotBreak">${val.language}</p>
            <div class="theLevel shouldNotBreak"><span class="theLevelLoader" style="width: ${val.level};"></span></div>
            </div> 
            `
              : ""
          }
      
      `
        )
        .join("")}
        </div>
        `
          : ""
      }
      ${
        data.reffrences.length !== 0
          ? `<div class="references informationContainer">
     <h3 class="inforHeader shouldNotBreak">Refrence</h3>
     ${data.reffrences
       .filter((val) => val !== {})
       .map((ref) => {
         if (ref.language || ref.langLevel) return;
         return `
         
         <div class="reference content-wrapper">
         <span></span>
         ${
           ref.refrenceName
             ? `<p class="refName shouldNotBreak">${ref.refrenceName}</p>`
             : ""
         }
         ${
           ref.referenceTitleAndOrg
             ? `<p class="titleandorg shouldNotBreak">${ref.referenceTitleAndOrg} </p>`
             : ""
         }
         ${
           ref.refrenceEmail
             ? ` <p class="email shouldNotBreak">${ref.refrenceEmail}</p>`
             : ""
         }
          </div>
`;
       })
       .join("")}
</div>
`
          : ""
      }
    </div>
    <div class="large-content">
    ${
      data.experiences.length !== 0
        ? `
    <div class="recent-experience informationContainer">
    <h3 class="inforHeader shouldNotBreak">Experience</h3>${data.experiences
      .map((experience) => {
        return `${
          Object.keys(experience).length !== 0
            ? `<div class="experience content-wrapper">
    <div class="start-and-end-date shouldNotBreak">
    ${
      experience.experiencestarts
        ? ` <p class="start">${experience.experiencestarts}</p>`
        : ""
    }
    ${experience.experienceends ? ` <p class="end">to</p>` : ""}  
     ${
       experience.experienceends
         ? ` <p class="end">${experience.experienceends}</p>`
         : ""
     }  
       
      </div>
       <div class="box-for-title-and-org shouldNotBreak">
      ${
        experience.jobTitle
          ? ` <p class="jobtitle">${experience.jobTitle}</p>/`
          : ""
      }
      ${
        experience.orgAddress
          ? ` <p class="organizationAndAddress">${experience.orgAddress}</p>`
          : ""
      }
      <div class="box-for-org-city-and-org">
      ${
        experience.orgCity
          ? `<p class="organizationAndAddress">${experience.orgCity + " /"}</p>`
          : ""
      }
      ${
        experience.orgState
          ? ` <p class="sorgState">${experience.orgState}</p>`
          : ""
      }
      </div>   
      
      </div>
      ${
        findDuty(experience.experience) !== undefined &&
        findDuty(experience.experience) !== null
          ? findDuty(experience.experience)
          : ""
      }
    </div>`
            : ""
        }`;
      })
      .join("")}
      
         
    </div>`
        : ""
    }
   
  
  ${
    data.educations.length !== 0
      ? `
  <div class="educational-background informationContainer">
  <h3 class="inforHeader shouldNotBreak">Education</h3>
  ${data.educations
    .filter((val) => val !== {})
    .map((edu) => {
      return `<div class="education content-wrapper">
      <span></span>
      <div class="start-and-end-date shouldNotBreak">
      ${
        edu.educationstarts ? `<p class="start">${edu.educationstarts}</p>` : ""
      }
        
        
        ${
          edu.educationends
            ? `<p>to</p><p class="end">${edu.educationends}</p>`
            : ""
        }
        
      </div>
  <p class="qualification shouldNotBreak">${
    edu.qualification ? edu.qualification : ""
  }</p>
  <p class="school-and-address shouldNotBreak">
  ${edu.eduAndAddress ? edu.eduAndAddress : ""}
  </p>
  </div>
  `;
    })
    .join("")}
  
  </div>
  `
      : ""
  }
       
         ${
           data.certifications.length !== 0
             ? `<div class="certification informationContainer">
      <h3 class="inforHeader shouldNotBreak">Certification</h3>
      <ul class="content-wrapper">
      ${data.certifications
        .map((cert) => `<li class="shouldNotBreak">${cert}</li>`)
        .join("")}
      </ul>
      </div>
      `
             : ""
         }
      </div>
    </div>`;
    }
    if (data.template.template === "resume4") {
      marckup = ` <div id="${data._id}" class="template resume rl template4">
      
      
     
  <div class="template4-header">
  <div class="passportDateOfBirth">
  <div class="passport-box">
  ${
    data.images
      ? `<img
            src="${data.images.url}"
            alt=""
            class="passport"
           
            
            
            />`
      : `<h1 class="initials">${useInitial(data.fullName)}</h1>`
  } 
          </div>
          <div class="date-of-birth">
          <p class="dateOfBirth">date of birth:</p>
          <p>${data.dateofbirth}</p>
          </div>
          </div>
  
  <div class="user-name-and-profession">
  
          
          
          <h1 class="user-name">${data.fullName}</h1>
          <p class="profession">${data.profession}</p>
      
          </div>
          </div>
          
      <div class="tiny-content">
      <div class="contact-information informationContainer">
  <h3 class="inforHeader shouldNotBreak">Contact information</h3>
  
        <div class="contact-container">
        <div class="content-wrapper">
        ${
          data.address
            ? `<div class="information">
           <p class="inforLabel"><i class="fa fa-map-marker infor-logo" aria-hidden="true"></i></p>
          <p class="inforVal">${data.address}</p>
        </div>
          `
            : ""
        }
        
          
           ${
             data.country
               ? `
            <div class="information">
              <p class="inforLabel"><i class="fa fa-flag-checkered infor-logo" aria-hidden="true"></i></p> 
      
            <p class="inforVal">${data.country}</p>
          </div>`
               : ""
           }
      
           ${
             data.state
               ? `
            <div class="information">
                 <p class="inforLabel"><i class="fa fa-home infor-logo" aria-hidden="true"></i></p> 
      
            <p class="inforVal">${data.state}</p>
          </div>`
               : ""
           }
      
           ${
             data.gender
               ? `<div class="information">
                 <p class="inforLabel"><i class="fa fa-user infor-logo" aria-hidden="true"></i></p> 
      
            <p class="inforVal">${data.gender}</p>
          </div>`
               : ""
           }
          
          ${
            data.maritalstatus
              ? `<div class="information">
                <p class="inforLabel"><i class="fa fa-users infor-logo" aria-hidden="true"></i></p> 
      
            <p class="inforVal">${data.maritalstatus}</p>
          </div>
            `
              : ""
          }
          ${
            data.phoneNumber
              ? ` <div class="information">
             <p class="inforLabel"><i class="fa fa-phone-square infor-logo" aria-hidden="true"></i></p>
            <p class="inforVal">${data.phoneNumber}</p>
          </div>`
              : ""
          }
          ${
            data.email
              ? `<div class="information">
              <p class="inforLabel"><i class="fa fa-envelope infor-logo" aria-hidden="true"></i></p>
              <p class="inforVal">${data.email}</p>
            </div>
            `
              : ""
          }
         
          </div>
        </div>
      </div>
      
        ${
          data.twitter || data.instagram || data.facebook || data.linkedin
            ? `
    <div class="social-media-links informationContainer">
    <h3 class="inforHeader shouldNotBreak">Social media links</h3>
    <div class="content-wrapper">
    ${
      data.facebook
        ? `<div class="information">
        <p class="inforLabel"><img class="infor-logo" src="img/fb-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.facebook}</p>
      </div>`
        : ""
    }
    ${
      data.instagram
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/ig-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.instagram}</p>
      </div>`
        : ""
    }
    
    ${
      data.twitter
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/twitter-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.twitter}</p>
      </div>`
        : ""
    }
    ${
      data.linkedin
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/linkedin-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.linkedin}</p>
      </div>`
        : ""
    }
    </div>
    </div>
  `
            : ""
        }
  
     ${
       data.skills.length !== 0
         ? `   <div class="skills informationContainer">
      <h3 class="inforHeader shouldNotBreak">Skills</h3>
      <ul class="content-wrapper">
      ${data.skills
        .map(
          (skill) =>
            `${skill ? `<li class="shouldNotBreak">${skill}</li>` : ""}`
        )
        .join("")}
      </ul>
      </div>
      `
         : ""
     }
  
       
         ${
           data.interest.length !== 0
             ? `   <div class="interest informationContainer">
          <h3 class="inforHeader shouldNotBreak">Interest</h3>
          <ul class="content-wrapper">
          ${data.interest
            .map((intr) => `<li class="shouldNotBreak">${intr}</li>`)
            .join("")}
        </ul></div>`
             : ""
         }
         ${
           data.languages.length !== 0
             ? `
          <div class="languages informationContainer">
          <h3 class="inforHeader shouldNotBreak">Languages</h3>
        ${data.languages
          .map(
            (val) => `
            ${
              val.language
                ? `
              <div class="language content-wrapper">
              <p class="theLang shouldNotBreak">${val.language}</p>
              <div class="theLevel shouldNotBreak"><span class="theLevelLoader" style="width: ${val.level};"></span></div>
              </div> 
              `
                : ""
            }
        
        `
          )
          .join("")}
          </div>
          `
             : ""
         }
         ${
           data.reffrences.length !== 0
             ? `<div class="references informationContainer">
       <h3 class="inforHeader shouldNotBreak">Refrence</h3>
       ${data.reffrences
         .map((ref) => {
           if (ref.language || ref.langLevel) return;
           return `
           <div class="reference content-wrapper">
           <span></span>
           ${
             ref.refrenceName
               ? `<p class="refName shouldNotBreak">${ref.refrenceName}</p>`
               : ""
           }
           ${
             ref.referenceTitleAndOrg
               ? `<p class="titleandorg shouldNotBreak">${ref.referenceTitleAndOrg} </p>`
               : ""
           }
           ${
             ref.refrenceEmail
               ? ` <p class="email shouldNotBreak">${ref.refrenceEmail}</p>`
               : ""
           }
            </div>
 `;
         })
         .join("")}
 
 </div>
 `
             : ""
         }
      </div>
  
      <div class="large-content">
 
     
      ${
        data.profile
          ? `
        <div class="profile informationContainer">
      <h3 class="inforHeader shouldNotBreak">Profile</h3>
      <p>
      ${data.profile}  
      </p>
      </div>`
          : ""
      }
  
      ${
        data.experiences.length !== 0
          ? `
      <div class="recent-experience informationContainer">
      <h3 class="inforHeader shouldNotBreak">Experience</h3>${data.experiences
        .map((experience) => {
          return `${
            Object.keys(experience).length !== 0
              ? `<div class="experience content-wrapper">
      <div class="start-and-end-date shouldNotBreak">
      ${
        experience.experiencestarts
          ? ` <p class="start">${experience.experiencestarts}</p>`
          : ""
      }
      ${experience.experienceends ? ` <p class="end">to</p>` : ""}  
       ${
         experience.experienceends
           ? ` <p class="end">${experience.experienceends}</p>`
           : ""
       }  
         
        </div>
         <div class="box-for-title-and-org shouldNotBreak">
        ${
          experience.jobTitle
            ? ` <p class="jobtitle">${experience.jobTitle}</p>/`
            : ""
        }
        ${
          experience.orgAddress
            ? ` <p class="organizationAndAddress">${experience.orgAddress}</p>`
            : ""
        }
        <div class="box-for-org-city-and-org">
        ${
          experience.orgCity
            ? `<p class="organizationAndAddress">${
                experience.orgCity + " /"
              }</p>`
            : ""
        }
        ${
          experience.orgState
            ? ` <p class="sorgState">${experience.orgState}</p>`
            : ""
        }
       </div>   
  
        
        </div>
        ${
          findDuty(experience.experience) !== undefined &&
          findDuty(experience.experience) !== null
            ? findDuty(experience.experience)
            : ""
        }
      </div>`
              : ""
          }`;
        })
        .join("")}
  
        
           
      </div>`
          : ""
      }
     
     
    
      ${
        data.educations.length !== 0
          ? `
    
      <div class="educational-background informationContainer">
      <h3 class="inforHeader shouldNotBreak">Education</h3>
      ${data.educations
        .map((edu) => {
          return `<div class="education content-wrapper">
          <span></span>
          <div class="start-and-end-date shouldNotBreak">
          ${
            edu.educationstarts
              ? `<p class="start">${edu.educationstarts}</p>`
              : ""
          }
            
            
            ${
              edu.educationends
                ? `<p>to</p><p class="end">${edu.educationends}</p>`
                : ""
            }
            
          </div>
        <p class="qualification shouldNotBreak">${
          edu.qualification ? edu.qualification : ""
        }</p>
        <p class="school-and-address shouldNotBreak">
        ${edu.eduAndAddress ? edu.eduAndAddress : ""}
        </p>
      </div>
      `;
        })
        .join("")}
    </div>
      `
          : ""
      }
      
    
      
      ${
        data.certifications.length !== 0
          ? `<div class="certification informationContainer">
        <h3 class="inforHeader shouldNotBreak">Certification</h3>
        <ul class="content-wrapper">
        ${data.certifications
          .map((cert) => `<li class="shouldNotBreak">${cert}</li>`)
          .join("")}
        </ul>
        </div>
        `
          : ""
      }
      </div>
    </div>
  `;
    }
    if (data.template.template === "resume5") {
      marckup = `
      
      <div id="${data._id}" class="template resume rl template5">
        <div class="tiny-content">     
  
          <div class="passportDateOfBirth">
          <div class="passport-box">
          ${
            data.images
              ? `<img
            src="${data.images.url}"
            alt=""
            class="passport"
           
            
            
            />`
              : `<h1 class="initials">${useInitial(data.fullName)}</h1>`
          } 
          </div>
          <div class="date-of-birth">
            <p class="dateOfBirth">date of birth:</p>
            <p>${data.dateofbirth}</p>
          </div>
        </div>
   
        <div class="contact-information informationContainer">
        <h3 class="inforHeader shouldNotBreak">Contact information</h3>
        <div class="content-wrapper">
        ${
          data.address
            ? `<div class="information">
           <p class="inforLabel"><i class="fa fa-map-marker infor-logo" aria-hidden="true"></i></p>
          <p class="inforVal">${data.address}</p>
        </div>
          `
            : ""
        }
        
          
           ${
             data.country
               ? `
            <div class="information">
              <p class="inforLabel"><i class="fa fa-flag-checkered infor-logo" aria-hidden="true"></i></p> 
      
            <p class="inforVal">${data.country}</p>
          </div>`
               : ""
           }
      
           ${
             data.state
               ? `
            <div class="information">
                 <p class="inforLabel"><i class="fa fa-home infor-logo" aria-hidden="true"></i></p> 
      
            <p class="inforVal">${data.state}</p>
          </div>`
               : ""
           }
      
           ${
             data.gender
               ? `<div class="information">
                 <p class="inforLabel"><i class="fa fa-user infor-logo" aria-hidden="true"></i></p> 
      
            <p class="inforVal">${data.gender}</p>
          </div>`
               : ""
           }
          
          ${
            data.maritalstatus
              ? `<div class="information">
                <p class="inforLabel"><i class="fa fa-users infor-logo" aria-hidden="true"></i></p> 
      
            <p class="inforVal">${data.maritalstatus}</p>
          </div>
            `
              : ""
          }
          ${
            data.phoneNumber
              ? ` <div class="information">
             <p class="inforLabel"><i class="fa fa-phone-square infor-logo" aria-hidden="true"></i></p>
            <p class="inforVal">${data.phoneNumber}</p>
          </div>`
              : ""
          }
          ${
            data.email
              ? `<div class="information">
              <p class="inforLabel"><i class="fa fa-envelope infor-logo" aria-hidden="true"></i></p>
              <p class="inforVal">${data.email}</p>
            </div>
            `
              : ""
          }
         
        </div>
      </div>
  
  ${
    data.twitter || data.instagram || data.facebook || data.linkedin
      ? `
    <div class="social-media-links informationContainer">
    <h3 class="inforHeader shouldNotBreak">Social media links</h3>
    <div class="content-wrapper">
    ${
      data.facebook
        ? `<div class="information">
        <p class="inforLabel"><img class="infor-logo" src="img/fb-white-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.facebook}</p>
      </div>`
        : ""
    }
    ${
      data.instagram
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/ig-white-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.instagram}</p>
      </div>`
        : ""
    }
    
    ${
      data.twitter
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/twitter-white-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.twitter}</p>
      </div>`
        : ""
    }
    ${
      data.linkedin
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/linkedin-white-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.linkedin}</p>
      </div>`
        : ""
    }
  
    </div>
    </div>
  `
      : ""
  }
    ${
      data.skills.length !== 0
        ? `   <div class="skills informationContainer">
      <h3 class="inforHeader shouldNotBreak">Skills</h3>
      <ul class="content-wrapper">
      ${data.skills
        .map(
          (skill) =>
            `${skill ? `<li class="shouldNotBreak">${skill}</li>` : ""}`
        )
        .join("")}
      </ul>
      </div>
      `
        : ""
    }
    
  
      ${
        data.interest.length !== 0
          ? `   <div class="interest informationContainer">
        <h3 class="inforHeader shouldNotBreak">Interest</h3>
        <ul class="content-wrapper">
        ${data.interest
          .map((intr) => `<li class="shouldNotBreak">${intr}</li>`)
          .join("")}
        </ul>
      </div>
        `
          : ""
      }
      ${
        data.languages.length !== 0
          ? `
        <div class="languages informationContainer">
        <h3 class="inforHeader shouldNotBreak">Languages</h3>
      ${data.languages
        .map(
          (val) => `
          ${
            val.language
              ? `
            <div class="language content-wrapper">
            <p class="theLang shouldNotBreak">${val.language}</p>
            <div class="theLevel shouldNotBreak"><span class="theLevelLoader" style="width: ${val.level};"></span></div>
            </div> 
            `
              : ""
          }
      
      `
        )
        .join("")}
        </div>
        `
          : ""
      }
${
  data.reffrences.length !== 0
    ? `<div class="references informationContainer">
<h3 class="inforHeader shouldNotBreak">Refrence</h3>
${data.reffrences
  .map((ref) => {
    if (ref.language || ref.langLevel) return;
    return `
  <div class="reference content-wrapper">
  <span></span>
  ${
    ref.refrenceName
      ? `<p class="refName shouldNotBreak">${ref.refrenceName}</p>`
      : ""
  }
  ${
    ref.referenceTitleAndOrg
      ? `<p class="titleandorg shouldNotBreak">${ref.referenceTitleAndOrg} </p>`
      : ""
  }
  ${
    ref.refrenceEmail
      ? ` <p class="email shouldNotBreak">${ref.refrenceEmail}</p>`
      : ""
  }
   </div>
`;
  })
  .join("")}
</div>
`
    : ""
}
        </div>
  
    <div class="large-content">
      <div class="user-name-and-profession">
        <h1 class="user-name">${data.fullName}</h1>
        <p class="profession">${data.profession}</p>
      </div>
      ${
        data.profile
          ? `
        <div class="profile informationContainer">
      <h3 class="inforHeader shouldNotBreak">Profile</h3>
      <p>
      ${data.profile}  
      </p>
    </div>`
          : ""
      }
  
    ${
      data.experiences.length !== 0
        ? `
    <div class="recent-experience informationContainer">
    <h3 class="inforHeader shouldNotBreak">Experience</h3>${data.experiences
      .map((experience) => {
        return `${
          Object.keys(experience).length !== 0
            ? `<div class="experience content-wrapper">
    <div class="start-and-end-date shouldNotBreak">
    ${
      experience.experiencestarts
        ? ` <p class="start">${experience.experiencestarts}</p>`
        : ""
    }
    ${experience.experienceends ? ` <p class="end">to</p>` : ""}  
     ${
       experience.experienceends
         ? ` <p class="end">${experience.experienceends}</p>`
         : ""
     }  
       
      </div>
       <div class="box-for-title-and-org shouldNotBreak">
      ${
        experience.jobTitle
          ? ` <p class="jobtitle">${experience.jobTitle}</p>/`
          : ""
      }
      ${
        experience.orgAddress
          ? ` <p class="organizationAndAddress">${experience.orgAddress}</p>`
          : ""
      }
      <div class="box-for-org-city-and-org">
      ${
        experience.orgCity
          ? `<p class="organizationAndAddress">${experience.orgCity + " /"}</p>`
          : ""
      }
      ${
        experience.orgState
          ? ` <p class="sorgState">${experience.orgState}</p>`
          : ""
      }
     </div>   
      
      </div>
      ${
        findDuty(experience.experience) !== undefined &&
        findDuty(experience.experience) !== null
          ? findDuty(experience.experience)
          : ""
      }
    </div>`
            : ""
        }`;
      })
      .join("")}
      
         
    </div>`
        : ""
    }
   
  
    ${
      data.educations.length !== 0
        ? `
  
    <div class="educational-background informationContainer">
    <h3 class="inforHeader shouldNotBreak">Education</h3>
    ${data.educations
      .map((edu) => {
        return `<div class="education content-wrapper">
        <span></span>
      
        <div class="start-and-end-date shouldNotBreak">
      ${
        edu.educationstarts ? `<p class="start">${edu.educationstarts}</p>` : ""
      }
        
        
        ${
          edu.educationends
            ? `<p>to</p><p class="end">${edu.educationends}</p>`
            : ""
        }
        
      </div>
      <p class="qualification shouldNotBreak">${
        edu.qualification ? edu.qualification : ""
      }</p>
      <p class="school-and-address shouldNotBreak">
      ${edu.eduAndAddress ? edu.eduAndAddress : ""}
      </p>
    </div>
    `;
      })
      .join("")}
  </div>
    `
        : ""
    }
    
  
   
    ${
      data.certifications.length !== 0
        ? `<div class="certification informationContainer">
      <h3 class="inforHeader shouldNotBreak">Certification</h3>
      <ul class="content-wrapper">
      ${data.certifications
        .map((cert) => `<li class="shouldNotBreak">${cert}</li>`)
        .join("")}
      </ul>
      </div>
      `
        : ""
    }
        </div>
      </div>
  `;
    }
    if (data.template.template === "resume6") {
      marckup = `   <div id="${data._id}" class="template resume rl template6">
      
      <div class="user-name-and-profession">
      <h1 class="user-name">${data.fullName}</h1>
      <p class="profession">${data.profession}</p>
    </div>
      <div class="large-content">
      ${
        data.profile
          ? `
        <div class="profile informationContainer">
      <h3 class="inforHeader shouldNotBreak">Profile</h3>
      <p>
      ${data.profile}  
      </p>
    </div>`
          : ""
      }
  
      ${
        data.experiences.length !== 0
          ? `
      <div class="recent-experience informationContainer">
      <h3 class="inforHeader shouldNotBreak">Experience</h3>${data.experiences
        .map((experience) => {
          return `${
            Object.keys(experience).length !== 0
              ? `<div class="experience content-wrapper">
      <div class="start-and-end-date shouldNotBreak">
      ${
        experience.experiencestarts
          ? ` <p class="start">${experience.experiencestarts}</p>`
          : ""
      }
      ${experience.experienceends ? ` <p class="end">to</p>` : ""}  
       ${
         experience.experienceends
           ? ` <p class="end">${experience.experienceends}</p>`
           : ""
       }  
         
        </div>
         <div class="box-for-title-and-org shouldNotBreak">
        ${
          experience.jobTitle
            ? ` <p class="jobtitle">${experience.jobTitle}</p>/`
            : ""
        }
        ${
          experience.orgAddress
            ? ` <p class="organizationAndAddress">${experience.orgAddress}</p>`
            : ""
        }
        <div class="box-for-org-city-and-org">
        ${
          experience.orgCity
            ? `<p class="organizationAndAddress">${
                experience.orgCity + " /"
              }</p>`
            : ""
        }
        ${
          experience.orgState
            ? ` <p class="sorgState">${experience.orgState}</p>`
            : ""
        }
      </div>   
  
        
        </div>
        ${
          findDuty(experience.experience) !== undefined &&
          findDuty(experience.experience) !== null
            ? findDuty(experience.experience)
            : ""
        }
      </div>`
              : ""
          }`;
        })
        .join("")}
  
        
           
      </div>`
          : ""
      }
     
    
  
    ${
      data.educations.length !== 0
        ? `
  
    <div class="educational-background informationContainer">
    <h3 class="inforHeader shouldNotBreak">Education</h3>
    ${data.educations
      .map((edu) => {
        return `<div class="education content-wrapper">
        <span></span>
      
        <div class="start-and-end-date shouldNotBreak">
      ${
        edu.educationstarts ? `<p class="start">${edu.educationstarts}</p>` : ""
      }
        
        
        ${
          edu.educationends
            ? `<p>to</p><p class="end">${edu.educationends}</p>`
            : ""
        }
        
      </div>
      <p class="qualification shouldNotBreak">${
        edu.qualification ? edu.qualification : ""
      }</p>
      <p class="school-and-address shouldNotBreak">
      ${edu.eduAndAddress ? edu.eduAndAddress : ""}
      </p>
    </div>
    `;
      })
      .join("")}
  </div>
    `
        : ""
    }
    
  
   
    ${
      data.certifications.length !== 0
        ? `<div class="certification informationContainer">
      <h3 class="inforHeader shouldNotBreak">Certification</h3>
      <ul class="content-wrapper">
      ${data.certifications
        .map((cert) => `<li class="shouldNotBreak">${cert}</li>`)
        .join("")}
      </ul>
      </div>
      `
        : ""
    }
      </div>
  
      <div class="tiny-content">
      <div class="passportDateOfBirth">
      <div class="passport-box">
      ${
        data.images
          ? `<img
        src="${data.images.url}"
        alt=""
        class="passport"
       
        
        
        />`
          : `<h1 class="initials">${useInitial(data.fullName)}</h1>`
      } 
      </div>
      <div class="date-of-birth">
        <p class="dateOfBirth">date of birth:</p>
        <p>${data.dateofbirth}</p>
      </div>
    </div>
      <div class="contact-information informationContainer">
      <h3 class="inforHeader shouldNotBreak">Contact information</h3>
      <div class="content-wrapper">
      ${
        data.address
          ? `<div class="information">
         <p class="inforLabel"><i class="fa fa-map-marker infor-logo" aria-hidden="true"></i></p>
        <p class="inforVal">${data.address}</p>
      </div>
        `
          : ""
      }
      
        
         ${
           data.country
             ? `
          <div class="information">
            <p class="inforLabel"><i class="fa fa-flag-checkered infor-logo" aria-hidden="true"></i></p> 
    
          <p class="inforVal">${data.country}</p>
        </div>`
             : ""
         }
    
         ${
           data.state
             ? `
          <div class="information">
               <p class="inforLabel"><i class="fa fa-home infor-logo" aria-hidden="true"></i></p> 
    
          <p class="inforVal">${data.state}</p>
        </div>`
             : ""
         }
    
         ${
           data.gender
             ? `<div class="information">
               <p class="inforLabel"><i class="fa fa-user infor-logo" aria-hidden="true"></i></p> 
    
          <p class="inforVal">${data.gender}</p>
        </div>`
             : ""
         }
        
        ${
          data.maritalstatus
            ? `<div class="information">
              <p class="inforLabel"><i class="fa fa-users infor-logo" aria-hidden="true"></i></p> 
    
          <p class="inforVal">${data.maritalstatus}</p>
        </div>
          `
            : ""
        }
        ${
          data.phoneNumber
            ? ` <div class="information">
           <p class="inforLabel"><i class="fa fa-phone-square infor-logo" aria-hidden="true"></i></p>
          <p class="inforVal">${data.phoneNumber}</p>
        </div>`
            : ""
        }
        ${
          data.email
            ? `<div class="information">
            <p class="inforLabel"><i class="fa fa-envelope infor-logo" aria-hidden="true"></i></p>
            <p class="inforVal">${data.email}</p>
          </div>
          `
            : ""
        }
      </div>
    </div>
  
  ${
    data.twitter || data.instagram || data.facebook || data.linkedin
      ? `
  <div class="social-media-links informationContainer">
  <h3 class="inforHeader shouldNotBreak">Social media links</h3>
  <div class="content-wrapper">
  ${
    data.facebook
      ? `<div class="information">
      <p class="inforLabel"><img class="infor-logo" src="img/fb-black-icon.png" alt="logo"/></p> 
    <p class="inforVal">${data.facebook}</p>
    </div>`
      : ""
  }
  ${
    data.instagram
      ? `<div class="information">
        <p class="inforLabel"><img class="infor-logo" src="img/ig-black-icon.png" alt="logo"/></p> 
    <p class="inforVal">${data.instagram}</p>
    </div>`
      : ""
  }
  
  ${
    data.twitter
      ? `<div class="information">
        <p class="inforLabel"><img class="infor-logo" src="img/twitter-black-icon.png" alt="logo"/></p> 
    <p class="inforVal">${data.twitter}</p>
    </div>`
      : ""
  }
  ${
    data.linkedin
      ? `<div class="information">
        <p class="inforLabel"><img class="infor-logo" src="img/linkedin-black-icon.png" alt="logo"/></p> 
    <p class="inforVal">${data.linkedin}</p>
    </div>`
      : ""
  }
  </div>
  </div>
  `
      : ""
  }
  ${
    data.skills.length !== 0
      ? `   <div class="skills informationContainer">
    <h3 class="inforHeader shouldNotBreak">Skills</h3>
    <ul class="content-wrapper">
    ${data.skills
      .map(
        (skill) => `${skill ? `<li class="shouldNotBreak">${skill}</li>` : ""}`
      )
      .join("")}
    </ul>
    </div>
    `
      : ""
  }
  
  
   
    ${
      data.interest.length !== 0
        ? `   <div class="interest informationContainer">
      <h3 class="inforHeader shouldNotBreak">Interest</h3>
      <ul class="content-wrapper">
      ${data.interest
        .map((intr) => `<li class="shouldNotBreak">${intr}</li>`)
        .join("")}
      </ul>
    </div>
      `
        : ""
    }
    ${
      data.languages.length !== 0
        ? `
      <div class="languages informationContainer">
      <h3 class="inforHeader shouldNotBreak">Languages</h3>
    ${data.languages
      .map(
        (val) => `
        ${
          val.language
            ? `
          <div class="language content-wrapper">
          <p class="theLang shouldNotBreak">${val.language}</p>
          <div class="theLevel shouldNotBreak"><span class="theLevelLoader" style="width: ${val.level};"></span></div>
          `
            : ""
        }
      </div> 
    
    `
      )
      .join("")}
      </div>
      `
        : ""
    }   
    ${
      data.reffrences.length !== 0
        ? `<div class="references informationContainer">
      <h3 class="inforHeader shouldNotBreak">Refrence</h3>
      ${data.reffrences
        .map((ref) => {
          if (ref.language || ref.langLevel) return;
          return `
          <div class="reference content-wrapper">
          <span></span>
          ${
            ref.refrenceName
              ? `<p class="refName shouldNotBreak">${ref.refrenceName}</p>`
              : ""
          }
          ${
            ref.referenceTitleAndOrg
              ? `<p class="titleandorg shouldNotBreak">${ref.referenceTitleAndOrg} </p>`
              : ""
          }
          ${
            ref.refrenceEmail
              ? ` <p class="email shouldNotBreak">${ref.refrenceEmail}</p>`
              : ""
          }
           </div>
  `;
        })
        .join("")}
  
  </div>
  `
        : ""
    }
        
      </div>
    </div>`;
    }

    if (data.template.template === "resume7") {
      marckup = `
      
      <div id="${
        data._id
      }" class="template resume rl plain-professional-template  template7">
       
       <div class="header-wrapper">
       <div class="user-name-and-profession">
        <h1 class="user-name">${data.fullName}</h1>
        <p class="profession">${data.profession}</p>
      </div>

       </div>
       
        <div class="tiny-content">     
  
          <div class="passportDateOfBirth">
          <div class="passport-box">
          ${
            data.images
              ? `<img
            src="${data.images.url}"
            alt=""
            class="passport"
           
            
            
            />`
              : `<h1 class="initials">${useInitial(data.fullName)}</h1>`
          } 
          </div>
         
        </div>
   
        <div class="contact-information informationContainer">
        <h3 class="inforHeader shouldNotBreak">Contact</h3>
        <div class="content-wrapper">
        ${
          data.address
            ? `<div class="information">
           <p class="inforLabel"><i class="fa fa-map-marker infor-logo" aria-hidden="true"></i></p>
          <p class="inforVal">${data.address}</p>
        </div>
          `
            : ""
        }
        
          
           ${
             data.country
               ? `
            <div class="information">
              <p class="inforLabel"><i class="fa fa-flag-checkered infor-logo" aria-hidden="true"></i></p> 
      
            <p class="inforVal">${data.country}</p>
          </div>`
               : ""
           }
      
           ${
             data.state
               ? `
            <div class="information">
                 <p class="inforLabel"><i class="fa fa-home infor-logo" aria-hidden="true"></i></p> 
      
            <p class="inforVal">${data.state}</p>
          </div>`
               : ""
           }
      
           ${
             data.gender
               ? `<div class="information">
                 <p class="inforLabel"><i class="fa fa-user infor-logo" aria-hidden="true"></i></p> 
      
            <p class="inforVal">${data.gender}</p>
          </div>`
               : ""
           }
          
          ${
            data.maritalstatus
              ? `<div class="information">
                <p class="inforLabel"><i class="fa fa-users infor-logo" aria-hidden="true"></i></p> 
      
            <p class="inforVal">${data.maritalstatus}</p>
          </div>
            `
              : ""
          }
          ${
            data.phoneNumber
              ? ` <div class="information">
             <p class="inforLabel"><i class="fa fa-phone-square infor-logo" aria-hidden="true"></i></p>
            <p class="inforVal">${data.phoneNumber}</p>
          </div>`
              : ""
          }
          ${
            data.email
              ? `<div class="information">
              <p class="inforLabel"><i class="fa fa-envelope infor-logo" aria-hidden="true"></i></p>
              <p class="inforVal">${data.email}</p>
            </div>
            `
              : ""
          }
         
        </div>
      </div>
  
  ${
    data.twitter || data.instagram || data.facebook || data.linkedin
      ? `
    <div class="social-media-links informationContainer">
    <h3 class="inforHeader shouldNotBreak">Social Handles</h3>
    <div class="content-wrapper">
    ${
      data.facebook
        ? `<div class="information">
        <p class="inforLabel"><img class="infor-logo" src="img/t7fb.png" alt="logo"/></p> 
      <p class="inforVal">${data.facebook}</p>
      </div>`
        : ""
    }
    ${
      data.instagram
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/t7ig.png" alt="logo"/></p> 
      <p class="inforVal">${data.instagram}</p>
      </div>`
        : ""
    }
    
    ${
      data.twitter
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/t7tw.png" alt="logo"/></p> 
      <p class="inforVal">${data.twitter}</p>
      </div>`
        : ""
    }
    ${
      data.linkedin
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/t7in.png" alt="logo"/></p> 
      <p class="inforVal">${data.linkedin}</p>
      </div>`
        : ""
    }
  
    </div>
    </div>
  `
      : ""
  }
    ${
      data.skills.length !== 0
        ? `   <div class="skills informationContainer">
      <h3 class="inforHeader shouldNotBreak">Skills</h3>
      <ul class="content-wrapper">
      ${data.skills
        .map(
          (skill) =>
            `${skill ? `<li class="shouldNotBreak">${skill}</li>` : ""}`
        )
        .join("")}
      </ul>
      </div>
      `
        : ""
    }
    
  
      ${
        data.interest.length !== 0
          ? `   <div class="interest informationContainer">
        <h3 class="inforHeader shouldNotBreak">Interest</h3>
        <ul class="content-wrapper">
        ${data.interest
          .map((intr) => `<li class="shouldNotBreak">${intr}</li>`)
          .join("")}
        </ul>
      </div>
        `
          : ""
      }
      ${
        data.languages.length !== 0
          ? `
        <div class="languages informationContainer">
        <h3 class="inforHeader shouldNotBreak">Languages</h3>
      ${data.languages
        .map(
          (val) => `
          ${
            val.language
              ? `
            <div class="language content-wrapper">
            <p class="theLang shouldNotBreak">${val.language}</p>
            <div class="theLevel shouldNotBreak"><span class="theLevelLoader" style="width: ${val.level};"></span></div>
            </div> 
            `
              : ""
          }
      
      `
        )
        .join("")}
        </div>
        `
          : ""
      }
${
  data.reffrences.length !== 0
    ? `<div class="references informationContainer">
<h3 class="inforHeader shouldNotBreak">Refrence</h3>
${data.reffrences
  .map((ref) => {
    if (ref.language || ref.langLevel) return;
    return `
  <div class="reference content-wrapper">
  <span></span>
  ${
    ref.refrenceName
      ? `<p class="refName shouldNotBreak">${ref.refrenceName}</p>`
      : ""
  }
  ${
    ref.referenceTitleAndOrg
      ? `<p class="titleandorg shouldNotBreak">${ref.referenceTitleAndOrg} </p>`
      : ""
  }
  ${
    ref.refrenceEmail
      ? ` <p class="email shouldNotBreak">${ref.refrenceEmail}</p>`
      : ""
  }
   </div>
`;
  })
  .join("")}
</div>
`
    : ""
}
        </div>
  
    <div class="large-content">
      
      ${
        data.profile
          ? `
        <div class="profile informationContainer">
      <h3 class="inforHeader shouldNotBreak">Profile</h3>
      <p>
      ${data.profile}  
      </p>
    </div>`
          : ""
      }
  
    ${
      data.experiences.length !== 0
        ? `
    <div class="recent-experience informationContainer">
    <h3 class="inforHeader shouldNotBreak">Experience</h3>${data.experiences
      .map((experience) => {
        return `${
          Object.keys(experience).length !== 0
            ? `<div class="experience content-wrapper">
    <div class="start-and-end-date shouldNotBreak">
    ${
      experience.experiencestarts
        ? ` <p class="start">${convertToFullYear(
            experience.experiencestarts
          )}</p>`
        : ""
    }
    ${experience.experienceends ? ` <p class="end">-</p>` : ""}  
     ${
       experience.experienceends
         ? ` <p class="end">${convertToFullYear(experience.experienceends)}</p>`
         : ""
     }  
       
      </div>

      <div class="inner-content-wrapper">
       <div class="box-for-title-and-org shouldNotBreak">
      ${
        experience.jobTitle
          ? ` <p class="jobtitle">${experience.jobTitle}</p>/`
          : ""
      }
      ${
        experience.orgAddress
          ? ` <p class="organizationAndAddress">${experience.orgAddress}</p>`
          : ""
      }
      <div class="box-for-org-city-and-org">
      ${
        experience.orgCity
          ? `<p class="organizationAndAddress">${experience.orgCity + " /"}</p>`
          : ""
      }
      ${
        experience.orgState
          ? ` <p class="sorgState">${experience.orgState}</p>`
          : ""
      }
     </div>   
      
      </div>
      ${
        findDuty(experience.experience) !== undefined &&
        findDuty(experience.experience) !== null
          ? findDuty(experience.experience)
          : ""
      }
      </div>
    </div>`
            : ""
        }`;
      })
      .join("")}
      
         
    </div>`
        : ""
    }
   
  
    ${
      data.educations.length !== 0
        ? `
  
    <div class="educational-background informationContainer">
    <h3 class="inforHeader shouldNotBreak">Education</h3>
    ${data.educations
      .map((edu) => {
        return `<div class="education content-wrapper">
      
      
        <div class="start-and-end-date shouldNotBreak">
      ${
        edu.educationstarts
          ? `<p class="start">${convertToFullYear(edu.educationstarts)}</p>`
          : ""
      }
        
        
        ${
          edu.educationends
            ? `<p>-</p><p class="end">${convertToFullYear(
                edu.educationends
              )}</p>`
            : ""
        }
        
      </div>
      <div class="inner-content-wrapper">

      <p class="qualification shouldNotBreak">${
        edu.qualification ? edu.qualification : ""
      }</p>
      <p class="school-and-address shouldNotBreak">
      ${edu.eduAndAddress ? edu.eduAndAddress : ""}
      </p>
    </div>
    </div>
    `;
      })
      .join("")}
  </div>
    `
        : ""
    }
    
  
   
    ${
      data.certifications.length !== 0
        ? `<div class="certification informationContainer">
      <h3 class="inforHeader shouldNotBreak">Certification</h3>
      <ul class="content-wrapper">
      ${data.certifications
        .map((cert) => `<li class="shouldNotBreak">${cert}</li>`)
        .join("")}
      </ul>
      </div>
      `
        : ""
    }
        </div>
      </div>
  `;
    }
    if (data.template.template === "resume8") {
      marckup = `
        <div id="${
          data._id
        }" class="template resume rl professional-template template8">
    
          <div class="inner-container">
            <div class="header-wrapper">
              <div class="user-name-and-profession">
                <h1 class="user-name">${capitalizeFirstLetter(
                  data.fullName
                )}</h1>
                <p class="profession">${data.profession}</p>
              </div>
              <div class="contact-information informationContainer">
              <div class="content-wrapper">
                ${
                  data.country
                    ? `
            <div class="information">
              <p class="inforLabel"><i class="fa fa-home infor-logo" aria-hidden="true"></i></p> 
      
            <div class="inforVal"><p class="header">Country</p><p class="val">${data.country}</p></div>
          </div>`
                    : ""
                }
                ${
                  data.email
                    ? `<div class="information">
              <p class="inforLabel"><i class="fa fa-envelope infor-logo" aria-hidden="true"></i></p>
             
              <div class="inforVal">
              <p class="header">Email</p>
              <p class="val">${data.email}</p>
            </div>
            </div>
            `
                    : ""
                }
                ${
                  data.gender
                    ? `<div class="information">
                 <p class="inforLabel"><i class="fa fa-user infor-logo" aria-hidden="true"></i></p> 
      
            
            <div class="inforVal">
            <p class="header">Gender</p>
            <p class="val">${data.gender}</p>
          </div>
    
          </div>`
                    : ""
                }
                ${
                  data.maritalstatus
                    ? `<div class="information">
                <p class="inforLabel"> <i class="fa fa-heart" aria-hidden="true"></i></p> 
      
       
            <div class="inforVal">
                        <p class="header">Status</p>
                        <p class="val">${data.maritalstatus}</p>
                        
                      </div>
          </div>
            `
                    : ""
                }
                ${
                  data.phoneNumber
                    ? ` <div class="information">
             <p class="inforLabel"><i class="fa fa-phone-square infor-logo" aria-hidden="true"></i></p>
           
    
            <div class="inforVal">
            <p class="header">Phone</p>
            <p class="val">${data.phoneNumber}</p>
          </div>
          </div>`
                    : ""
                }
              </div>
            </div>
         
            </div>
            <div class="tiny-content">
              <div class="passportDateOfBirth">
                <div class="passport-box">
                  ${
                    data.images
                      ? `<img
            src="${data.images.url}"
            alt=""
            class="passport"
           
            
            
            />`
                      : `<h1 class="initials">${useInitial(data.fullName)}</h1>`
                  }
                </div>
              </div>
              ${
                data.twitter || data.instagram || data.facebook || data.linkedin
                  ? `
    <div class="social-media-links informationContainer">
    <h3 class="inforHeader shouldNotBreak">Social Handles</h3>
    <div class="content-wrapper">
    ${
      data.facebook
        ? `<div class="information">
        <p class="inforLabel"><img class="infor-logo" src="img/fb-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.facebook}</p>
      </div>`
        : ""
    }
    ${
      data.instagram
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/ig-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.instagram}</p>
      </div>`
        : ""
    }
    
    ${
      data.twitter
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/twitter-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.twitter}</p>
      </div>`
        : ""
    }
    ${
      data.linkedin
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/linkedin-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.linkedin}</p>
      </div>`
        : ""
    }
    
    </div>
    </div>
    `
                  : ""
              }
              ${
                data.skills.length !== 0
                  ? `   <div class="skills informationContainer">
      <h3 class="inforHeader shouldNotBreak">Skills</h3>
      <ul class="content-wrapper">
      ${data.skills
        .map(
          (skill) =>
            `${skill ? `<li class="shouldNotBreak">${skill}</li>` : ""}`
        )
        .join("")}
      </ul>
      </div>
      `
                  : ""
              }
              ${
                data.interest.length !== 0
                  ? `   <div class="interest informationContainer">
        <h3 class="inforHeader shouldNotBreak">Interest</h3>
        <ul class="content-wrapper">
        ${data.interest
          .map((intr) => `<li class="shouldNotBreak">${intr}</li>`)
          .join("")}
        </ul>
      </div>
        `
                  : ""
              }
              ${
                data.languages.length !== 0
                  ? `
        <div class="languages informationContainer">
        <h3 class="inforHeader shouldNotBreak">Languages</h3>
      ${data.languages
        .map(
          (val) => `
          ${
            val.language
              ? `
            <div class="language content-wrapper">
            <p class="theLang shouldNotBreak">${val.language}</p>
            <div class="theLevel shouldNotBreak"><span class="theLevelLoader" style="width: ${val.level};"></span></div>
            </div> 
            `
              : ""
          }
      
      `
        )
        .join("")}
        </div>
        `
                  : ""
              }
              ${
                data.reffrences.length !== 0
                  ? `<div class="references informationContainer">
    <h3 class="inforHeader shouldNotBreak">Refrence</h3>
    ${data.reffrences
      .map((ref) => {
        if (ref.language || ref.langLevel) return;
        return `
    <div class="reference content-wrapper">
    <span></span>
    ${
      ref.refrenceName
        ? `<p class="refName shouldNotBreak">${ref.refrenceName}</p>`
        : ""
    }
    ${
      ref.referenceTitleAndOrg
        ? `<p class="titleandorg shouldNotBreak">${ref.referenceTitleAndOrg} </p>`
        : ""
    }
    ${
      ref.refrenceEmail
        ? ` <p class="email shouldNotBreak">${ref.refrenceEmail}</p>`
        : ""
    }
    </div>
    `;
      })
      .join("")}
    </div>
    `
                  : ""
              }
            </div>
    
            <div class="large-content">
              ${
                data.profile
                  ? `
        <div class="profile informationContainer">
      <h3 class="inforHeader shouldNotBreak">Professional Profile</h3>
      <p>
      ${data.profile}  
      </p>
    </div>`
                  : ""
              }
              ${
                data.experiences.length !== 0
                  ? `
    <div class="recent-experience informationContainer">
    <h3 class="inforHeader shouldNotBreak">Work Experience</h3>
    
    ${data.experiences
      .map((experience) => {
        return `${
          Object.keys(experience).length !== 0
            ? `<div class="experience content-wrapper">
    
                          <div class="inner-content-wrapper">
    
       <div class="box-for-title-and-org shouldNotBreak">
      ${
        experience.jobTitle
          ? ` <p class="jobtitle">${experience.jobTitle}</p>`
          : ""
      }
      ${
        experience.orgAddress
          ? ` <p class="organizationAndAddress">${experience.orgAddress}</p>`
          : ""
      }
      <div class="box-for-org-city-and-org">
      ${
        experience.orgCity
          ? `<p class="organizationAndAddress">${experience.orgCity + ","}</p>`
          : ""
      }
      ${
        experience.orgState
          ? ` <p class="sorgState">${experience.orgState}</p>`
          : ""
      }
     </div>  
     </div>
    <div class="start-and-end-date shouldNotBreak">
    ${
      experience.experiencestarts
        ? ` <p class="start">${convertToFullYear(
            experience.experiencestarts
          )}</p>`
        : ""
    }
    ${experience.experienceends ? ` <p class="end">-</p>` : ""}  
     ${
       experience.experienceends
         ? ` <p class="end">${convertToFullYear(experience.experienceends)}</p>`
         : ""
     }  
       
     
     
     </div>
      </div>
      ${
        findDuty(experience.experience) !== undefined &&
        findDuty(experience.experience) !== null
          ? findDuty(experience.experience)
          : ""
      }
     
    </div>`
            : ""
        }`;
      })
      .join("")}
      
         
    </div>`
                  : ""
              }
              ${
                data.educations.length !== 0
                  ? `
    
    <div class="educational-background informationContainer">
    <h3 class="inforHeader shouldNotBreak">Education</h3>
    ${data.educations
      .map((edu) => {
        return `<div class="education content-wrapper">
      
      
        <div class="start-and-end-date shouldNotBreak">
      ${
        edu.educationstarts
          ? `<p class="start">${convertToFullYear(edu.educationstarts)}</p>`
          : ""
      }
        
        
        ${
          edu.educationends
            ? `<p>-</p><p class="end">${convertToFullYear(
                edu.educationends
              )}</p>`
            : ""
        }
        
      </div>
      <div class="inner-content-wrapper">
    
      <p class="qualification shouldNotBreak">${
        edu.qualification ? edu.qualification : ""
      }</p>
      <p class="school-and-address shouldNotBreak">
      ${edu.eduAndAddress ? edu.eduAndAddress : ""}
      </p>
    </div>
    </div>
    `;
      })
      .join("")}
    </div>
    `
                  : ""
              }
              ${
                data.certifications.length !== 0
                  ? `<div class="certification informationContainer">
      <h3 class="inforHeader shouldNotBreak">Certification</h3>
      <ul class="content-wrapper">
      ${data.certifications
        .map((cert) => `<li class="shouldNotBreak">${cert}</li>`)
        .join("")}
      </ul>
      </div>
      `
                  : ""
              }
            </div>
          </div>
        </div>`;
    }
    if (data.template.template === "resume9") {
      marckup = `
        <div id="${
          data._id
        }" class="template resume rl professional-template template9">
    
          <div class="inner-container">
          <div class="profession-container">
          <p class="profession">${data.profession}</p>

        </div>
        <div class="passportDateOfBirth">
        <div class="passport-box">
          ${
            data.images
              ? `<img
    src="${data.images.url}"
    alt=""
    class="passport"
   
    
    
    />`
              : `<h1 class="initials">${useInitial(data.fullName)}</h1>`
          }
        </div>
      </div>
            <div class="header-wrapper">
              <div class="user-name-and-profession">
                <h1 class="user-name">${capitalizeFirstLetter(
                  data.fullName
                )}</h1>
              </div>
              <div class="contact-information informationContainer">
              <div class="content-wrapper">
                ${
                  data.country
                    ? `
            <div class="information">
              <p class="inforLabel"><i class="fa fa-home infor-logo" aria-hidden="true"></i></p> 
      
            <div class="inforVal"><p class="header">Country</p><p class="val">${data.country}</p></div>
          </div>`
                    : ""
                }
               
                ${
                  data.gender
                    ? `<div class="information">
                 <p class="inforLabel"><i class="fa fa-user infor-logo" aria-hidden="true"></i></p> 
      
            
            <div class="inforVal">
            <p class="header">Gender</p>
            <p class="val">${data.gender}</p>
          </div>
    
          </div>`
                    : ""
                }
                ${
                  data.maritalstatus
                    ? `<div class="information">
                <p class="inforLabel"> <i class="fa fa-heart" aria-hidden="true"></i></p> 
      
       
            <div class="inforVal">
                        <p class="header">Status</p>
                        <p class="val">${data.maritalstatus}</p>
                        
                      </div>
          </div>
            `
                    : ""
                }
             
              </div>
            </div>
         
            </div>
            ${
              data.profile
                ? `
      <div class="profile informationContainer">
    <h3 class="inforHeader shouldNotBreak">Profile<span></span></h3>
    <p>
    ${data.profile}  
    </p>
  </div>`
                : ""
            }
            <div class="tiny-content">
            <div class="contact-information informationContainer">
            <h3 class="inforHeader shouldNotBreak">Contact</h3>
            <div class="content-wrapper">
            ${
              data.address
                ? `<div class="information">
               <p class="inforLabel"><i class="fa fa-map-marker infor-logo" aria-hidden="true"></i></p>
              <p class="inforVal">${data.address}</p>
            </div>
              `
                : ""
            }
            
              
             
               ${
                 data.state
                   ? `
                <div class="information">
                     <p class="inforLabel"><i class="fa fa-home infor-logo" aria-hidden="true"></i></p> 
          
                <p class="inforVal">${data.state}</p>
              </div>`
                   : ""
               }
          
   
              ${
                data.phoneNumber
                  ? ` <div class="information">
                 <p class="inforLabel"><i class="fa fa-phone-square infor-logo" aria-hidden="true"></i></p>
                <p class="inforVal">${data.phoneNumber}</p>
              </div>`
                  : ""
              }
              ${
                data.email
                  ? `<div class="information">
                  <p class="inforLabel"><i class="fa fa-envelope infor-logo" aria-hidden="true"></i></p>
                  <p class="inforVal">${data.email}</p>
                </div>
                `
                  : ""
              }
             
            </div>
          </div>
             
              ${
                data.twitter || data.instagram || data.facebook || data.linkedin
                  ? `
    <div class="social-media-links informationContainer">
    <h3 class="inforHeader shouldNotBreak">Social Handles</h3>
    <div class="content-wrapper">
    ${
      data.facebook
        ? `<div class="information">
        <p class="inforLabel"><img class="infor-logo" src="img/fb-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.facebook}</p>
      </div>`
        : ""
    }
    ${
      data.instagram
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/ig-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.instagram}</p>
      </div>`
        : ""
    }
    
    ${
      data.twitter
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/twitter-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.twitter}</p>
      </div>`
        : ""
    }
    ${
      data.linkedin
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/linkedin-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.linkedin}</p>
      </div>`
        : ""
    }
    
    </div>
    </div>
    `
                  : ""
              }
              ${
                data.skills.length !== 0
                  ? `   <div class="skills informationContainer">
      <h3 class="inforHeader shouldNotBreak">Skills</h3>
      <ul class="content-wrapper ul">
      ${data.skills
        .map(
          (skill) =>
            `${skill ? `<li class="shouldNotBreak">${skill}</li>` : ""}`
        )
        .join("")}
      </ul>
      </div>
      `
                  : ""
              }
              ${
                data.interest.length !== 0
                  ? `   <div class="interest informationContainer">
        <h3 class="inforHeader shouldNotBreak">Interest</h3>
        <ul class="content-wrapper ul">
        ${data.interest
          .map((intr) => `<li class="shouldNotBreak">${intr}</li>`)
          .join("")}
        </ul>
      </div>
        `
                  : ""
              }
              ${
                data.languages.length !== 0
                  ? `
        <div class="languages informationContainer">
        <h3 class="inforHeader shouldNotBreak">Languages</h3>
      ${data.languages
        .map(
          (val) => `
          ${
            val.language
              ? `
            <div class="language content-wrapper">
            <p class="theLang shouldNotBreak">${val.language}</p>
            <div class="theLevel shouldNotBreak"><span class="theLevelLoader" style="width: ${val.level};"></span></div>
            </div> 
            `
              : ""
          }
      
      `
        )
        .join("")}
        </div>
        `
                  : ""
              }
              ${
                data.reffrences.length !== 0
                  ? `<div class="references informationContainer">
    <h3 class="inforHeader shouldNotBreak">Refrence</h3>
    ${data.reffrences
      .map((ref) => {
        if (ref.language || ref.langLevel) return;
        return `
    <div class="reference content-wrapper">
    <span></span>
    ${
      ref.refrenceName
        ? `<p class="refName shouldNotBreak">${ref.refrenceName}</p>`
        : ""
    }
    ${
      ref.referenceTitleAndOrg
        ? `<p class="titleandorg shouldNotBreak">${ref.referenceTitleAndOrg} </p>`
        : ""
    }
    ${
      ref.refrenceEmail
        ? ` <p class="email shouldNotBreak">${ref.refrenceEmail}</p>`
        : ""
    }
    </div>
    `;
      })
      .join("")}
    </div>
    `
                  : ""
              }
            </div>
    
            <div class="large-content">
             
              ${
                data.experiences.length !== 0
                  ? `
    <div class="recent-experience informationContainer">
    <h3 class="inforHeader shouldNotBreak">Work Experience</h3>
    
    ${data.experiences
      .map((experience) => {
        return `${
          Object.keys(experience).length !== 0
            ? `<div class="experience content-wrapper">
    
                          <div class="inner-content-wrapper">
    
       <div class="box-for-title-and-org shouldNotBreak">
      ${
        experience.jobTitle
          ? ` <p class="jobtitle">${experience.jobTitle}</p>`
          : ""
      }
      ${
        experience.orgAddress
          ? ` <p class="organizationAndAddress">${experience.orgAddress}</p>`
          : ""
      }
      <div class="box-for-org-city-and-org">
      ${
        experience.orgCity
          ? `<p class="organizationAndAddress">${experience.orgCity + ","}</p>`
          : ""
      }
      ${
        experience.orgState
          ? ` <p class="sorgState">${experience.orgState}</p>`
          : ""
      }
     </div>  
     </div>
    <div class="start-and-end-date shouldNotBreak">
    ${
      experience.experiencestarts
        ? ` <p class="start">${convertToFullYear(
            experience.experiencestarts
          )}</p>`
        : ""
    }
    ${experience.experienceends ? ` <p class="end">-</p>` : ""}  
     ${
       experience.experienceends
         ? ` <p class="end">${convertToFullYear(experience.experienceends)}</p>`
         : ""
     }  
       
     
     
     </div>
      </div>
      ${
        findDuty(experience.experience) !== undefined &&
        findDuty(experience.experience) !== null
          ? findDuty(experience.experience)
          : ""
      }
     
    </div>`
            : ""
        }`;
      })
      .join("")}
      
         
    </div>`
                  : ""
              }
              ${
                data.educations.length !== 0
                  ? `
    
    <div class="educational-background informationContainer">
    <h3 class="inforHeader shouldNotBreak">Education</h3>
    ${data.educations
      .map((edu) => {
        return `<div class="education content-wrapper">
      
      
        <div class="start-and-end-date shouldNotBreak">
      ${
        edu.educationstarts
          ? `<p class="start">${convertToFullYear(edu.educationstarts)}</p>`
          : ""
      }
        
        
        ${
          edu.educationends
            ? `<p>-</p><p class="end">${convertToFullYear(
                edu.educationends
              )}</p>`
            : ""
        }
        
      </div>
      <div class="inner-content-wrapper">
    
      <p class="qualification shouldNotBreak">${
        edu.qualification ? edu.qualification : ""
      }</p>
      <p class="school-and-address shouldNotBreak">
      ${edu.eduAndAddress ? edu.eduAndAddress : ""}
      </p>
    </div>
    </div>
    `;
      })
      .join("")}
    </div>
    `
                  : ""
              }
              ${
                data.certifications.length !== 0
                  ? `<div class="certification informationContainer">
      <h3 class="inforHeader shouldNotBreak">Certification</h3>
      <ul class="content-wrapper ul" style="margin-left: 3.5rem">
      ${data.certifications
        .map((cert) => `<li class="shouldNotBreak">${cert}</li>`)
        .join("")}
      </ul>
      </div>
      `
                  : ""
              }
            </div>
          </div>
        </div>`;
    }
    if (data.template.template === "resume10") {
      marckup = `
        <div id="${
          data._id
        }" class="template resume rl professional-template template10">
    
          <div class="inner-container">
         
     

            <div class="header-wrapper">
            <div class="passportDateOfBirth">
         
            <span class="line"></span>
            <span class="triangle-down"></span>

              <div class="user-name-and-profession">
              <div class="profession-inner-container">
              <div class="internal-initials">
              <p>C</p>
              <hr />
              <p>V</p>
            </div>
              <p class="profession">${data.profession}</p>
    
            </div>
                <h1 class="user-name">${capitalizeFirstLetter(
                  data.fullName
                )}</h1>
              </div>
              <div class="passport-box">
              ${
                data.images
                  ? `<img
        src="${data.images.url}"
        alt=""
        class="passport"
       
        
        
        />`
                  : `<h1 class="initials">${useInitial(data.fullName)}</h1>`
              }
            </div>
          </div>
              <div class="contact-information informationContainer">
              <div class="content-wrapper">
              ${
                data.country
                  ? `
          <div class="information">
            <p class="inforLabel"><i class="fa fa-home infor-logo" aria-hidden="true"></i></p> 
    
          <div class="inforVal"><p class="header">Country</p><p class="val">${data.country}</p></div>
        </div>`
                  : ""
              }
              ${
                data.email
                  ? `<div class="information">
            <p class="inforLabel"><i class="fa fa-envelope infor-logo" aria-hidden="true"></i></p>
           
            <div class="inforVal">
            <p class="header">Email</p>
            <p class="val">${data.email}</p>
          </div>
          </div>
          `
                  : ""
              }
              ${
                data.gender
                  ? `<div class="information">
               <p class="inforLabel"><i class="fa fa-user infor-logo" aria-hidden="true"></i></p> 
    
          
          <div class="inforVal">
          <p class="header">Gender</p>
          <p class="val">${data.gender}</p>
        </div>
  
        </div>`
                  : ""
              }
              ${
                data.maritalstatus
                  ? `<div class="information">
              <p class="inforLabel"> <i class="fa fa-heart" aria-hidden="true"></i></p> 
    
     
          <div class="inforVal">
                      <p class="header">Status</p>
                      <p class="val">${data.maritalstatus}</p>
                      
                    </div>
        </div>
          `
                  : ""
              }
              ${
                data.phoneNumber
                  ? ` <div class="information">
           <p class="inforLabel"><i class="fa fa-phone-square infor-logo" aria-hidden="true"></i></p>
         
  
          <div class="inforVal">
          <p class="header">Phone</p>
          <p class="val">${data.phoneNumber}</p>
        </div>
        </div>`
                  : ""
              }
              </div>
            </div>
         
            </div>
         
            <div class="tiny-content">
           
              ${
                data.twitter || data.instagram || data.facebook || data.linkedin
                  ? `
    <div class="social-media-links informationContainer" >
    <h3 class="inforHeader shouldNotBreak">Social Handles</h3>
    <div class="content-wrapper">
    ${
      data.facebook
        ? `<div class="information">
        <p class="inforLabel"><img class="infor-logo" src="img/fb-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.facebook}</p>
      </div>`
        : ""
    }
    ${
      data.instagram
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/ig-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.instagram}</p>
      </div>`
        : ""
    }
    
    ${
      data.twitter
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/twitter-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.twitter}</p>
      </div>`
        : ""
    }
    ${
      data.linkedin
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/linkedin-black-icon.png" alt="logo"/></p> 
      <p class="inforVal">${data.linkedin}</p>
      </div>`
        : ""
    }
    
    </div>
    </div>
    `
                  : ""
              }
              ${
                data.skills.length !== 0
                  ? `   <div class="skills informationContainer">
      <h3 class="inforHeader shouldNotBreak">Skills</h3>
      <ul class="content-wrapper ul">
      ${data.skills
        .map(
          (skill) =>
            `${skill ? `<li class="shouldNotBreak">${skill}</li>` : ""}`
        )
        .join("")}
      </ul>
      </div>
      `
                  : ""
              }
              ${
                data.interest.length !== 0
                  ? `   <div class="interest informationContainer">
        <h3 class="inforHeader shouldNotBreak">Interest</h3>
        <ul class="content-wrapper ul">
        ${data.interest
          .map((intr) => `<li class="shouldNotBreak">${intr}</li>`)
          .join("")}
        </ul>
      </div>
        `
                  : ""
              }
              ${
                data.languages.length !== 0
                  ? `
        <div class="languages informationContainer">
        <h3 class="inforHeader shouldNotBreak">Languages</h3>
      ${data.languages
        .map(
          (val) => `
          ${
            val.language
              ? `
            <div class="language content-wrapper">
            <p class="theLang shouldNotBreak">${val.language}</p>
            <div class="theLevel shouldNotBreak"><span class="theLevelLoader" style="width: ${val.level};"></span></div>
            </div> 
            `
              : ""
          }
      
      `
        )
        .join("")}
        </div>
        `
                  : ""
              }
              ${
                data.reffrences.length !== 0
                  ? `<div class="references informationContainer">
    <h3 class="inforHeader shouldNotBreak">Refrence</h3>
    ${data.reffrences
      .map((ref) => {
        if (ref.language || ref.langLevel) return;
        return `
    <div class="reference content-wrapper">
    <span></span>
    ${
      ref.refrenceName
        ? `<p class="refName shouldNotBreak">${ref.refrenceName}</p>`
        : ""
    }
    ${
      ref.referenceTitleAndOrg
        ? `<p class="titleandorg shouldNotBreak">${ref.referenceTitleAndOrg} </p>`
        : ""
    }
    ${
      ref.refrenceEmail
        ? ` <p class="email shouldNotBreak">${ref.refrenceEmail}</p>`
        : ""
    }
    </div>
    `;
      })
      .join("")}
    </div>
    `
                  : ""
              }
            </div>
    
            <div class="large-content">
            ${
              data.profile
                ? `
      <div class="profile informationContainer">
    <h3 class="inforHeader shouldNotBreak">Profile<span></span></h3>
    <p>
    ${data.profile}  
    </p>
  </div>`
                : ""
            }
             
              ${
                data.experiences.length !== 0
                  ? `
    <div class="recent-experience informationContainer">
    <h3 class="inforHeader shouldNotBreak">Work Experience</h3>
    
    ${data.experiences
      .map((experience) => {
        return `${
          Object.keys(experience).length !== 0
            ? `<div class="experience content-wrapper">
    
                          <div class="inner-content-wrapper">
    
       <div class="box-for-title-and-org shouldNotBreak">
      ${
        experience.jobTitle
          ? ` <p class="jobtitle">${experience.jobTitle}</p>`
          : ""
      }
      ${
        experience.orgAddress
          ? ` <p class="organizationAndAddress">${experience.orgAddress}</p>`
          : ""
      }
      <div class="box-for-org-city-and-org">
      ${
        experience.orgCity
          ? `<p class="organizationAndAddress">${experience.orgCity + ","}</p>`
          : ""
      }
      ${
        experience.orgState
          ? ` <p class="sorgState">${experience.orgState}</p>`
          : ""
      }
     </div>  
     </div>
    <div class="start-and-end-date shouldNotBreak">
    ${
      experience.experiencestarts
        ? ` <p class="start">${convertToFullYear(
            experience.experiencestarts
          )}</p>`
        : ""
    }
    ${experience.experienceends ? ` <p class="end">-</p>` : ""}  
     ${
       experience.experienceends
         ? ` <p class="end">${convertToFullYear(experience.experienceends)}</p>`
         : ""
     }  
       
     
     
     </div>
      </div>
      ${
        findDuty(experience.experience) !== undefined &&
        findDuty(experience.experience) !== null
          ? findDuty(experience.experience)
          : ""
      }
     
    </div>`
            : ""
        }`;
      })
      .join("")}
      
         
    </div>`
                  : ""
              }
              ${
                data.educations.length !== 0
                  ? `
    
    <div class="educational-background informationContainer">
    <h3 class="inforHeader shouldNotBreak">Education</h3>
    ${data.educations
      .map((edu) => {
        return `<div class="education content-wrapper">
      
      
        <div class="start-and-end-date shouldNotBreak">
      ${
        edu.educationstarts
          ? `<p class="start">${convertToFullYear(edu.educationstarts)}</p>`
          : ""
      }
        
        
        ${
          edu.educationends
            ? `<p>-</p><p class="end">${convertToFullYear(
                edu.educationends
              )}</p>`
            : ""
        }
        
      </div>
      <div class="inner-content-wrapper">
    
      <p class="qualification shouldNotBreak">${
        edu.qualification ? edu.qualification : ""
      }</p>
      <p class="school-and-address shouldNotBreak">
      ${edu.eduAndAddress ? edu.eduAndAddress : ""}
      </p>
    </div>
    </div>
    `;
      })
      .join("")}
    </div>
    `
                  : ""
              }
              ${
                data.certifications.length !== 0
                  ? `<div class="certification informationContainer">
      <h3 class="inforHeader shouldNotBreak">Certification</h3>
      <ul class="content-wrapper ul" style="margin-left: 3.5rem">
      ${data.certifications
        .map((cert) => `<li class="shouldNotBreak">${cert}</li>`)
        .join("")}
      </ul>
      </div>
      `
                  : ""
              }
            </div>
          </div>
        </div>`;
    }
    if (data.template.template === "resume11") {
      marckup = `
      
      <div id="${
        data._id
      }" class="template resume rl plain-professional-template  template11">
       
       <div class="header-wrapper">
       <div class="user-name-and-profession">
        <h1 class="user-name">${data.fullName
          .split(" ")
          .map((strin, i) =>
            i === 0 ? `<span class="first-name">${strin}</span>` : strin
          )
          .join(" ")}</h1>
        <span class="tag"></span>
        <p class="profession">${data.profession}</p>
      </div>

       </div>
       
        <div class="tiny-content">        
        <div class="contact-information informationContainer">
        <h3 class="inforHeader shouldNotBreak">Contact</h3>
        <div class="content-wrapper">
        ${
          data.address
            ? `<div class="information">
           <p class="inforLabel"><i class="fa fa-map-marker infor-logo" aria-hidden="true"></i></p>
           <div class="inforVal">
           <p class="header">Address</p>
           <p class="val">${data.address} here</p>
         </div>
          
        </div>
          `
            : ""
        }
        
          
           ${
             data.country
               ? `
            <div class="information">
              <p class="inforLabel"><i class="fa fa-flag-checkered infor-logo" aria-hidden="true"></i></p> 
              <div class="inforVal">
              <p class="header">Country</p>
              <p class="val">${data.country}</p>
            </div>
          
          </div>`
               : ""
           }
      
           ${
             data.state
               ? `
            <div class="information">
                 <p class="inforLabel"><i class="fa fa-home infor-logo" aria-hidden="true"></i></p> 
                 <div class="inforVal">
                 <p class="header">State</p>
                 <p class="val">${data.state}</p>
               </div>
            
          </div>`
               : ""
           }
      
           ${
             data.gender
               ? `<div class="information">
                 <p class="inforLabel"><i class="fa fa-user infor-logo" aria-hidden="true"></i></p> 
                 <div class="inforVal">
                 <p class="header">Gender</p>
                 <p class="val">${data.gender}here</p>
               </div>
           
          </div>`
               : ""
           }
          
          ${
            data.maritalstatus
              ? `<div class="information">
                <p class="inforLabel"><i class="fa fa-users infor-logo" aria-hidden="true"></i></p> 
                <div class="inforVal">
                <p class="header">Status</p>
                <p class="val">${data.maritalstatus}</p>
              </div>
            
          </div>
            `
              : ""
          }
          ${
            data.phoneNumber
              ? ` <div class="information">
             <p class="inforLabel"><i class="fa fa-phone-square infor-logo" aria-hidden="true"></i></p>
             <div class="inforVal">
             <p class="header">Phone</p>
             <p class="val">${data.phoneNumber}</p>
           </div>
            
          </div>`
              : ""
          }
          ${
            data.email
              ? `<div class="information">
              <p class="inforLabel"><i class="fa fa-envelope infor-logo" aria-hidden="true"></i></p>
              
              <div class="inforVal">
                  <p class="header">Email</p>
                  <p class="val">${data.email}</p>
                </div>
            </div>
            `
              : ""
          }
         
        </div>
      </div>
  
  ${
    data.twitter || data.instagram || data.facebook || data.linkedin
      ? `
    <div class="social-media-links informationContainer">
    <h3 class="inforHeader shouldNotBreak">Social Handles</h3>
    <div class="content-wrapper">
    ${
      data.facebook
        ? `<div class="information">
        <p class="inforLabel"><img class="infor-logo" src="img/fb2.png" alt="logo"/></p> 
      <p class="inforVal">${data.facebook}</p>
      </div>`
        : ""
    }
    ${
      data.instagram
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/ig2.png" alt="logo"/></p> 
      <p class="inforVal">${data.instagram}</p>
      </div>`
        : ""
    }
    
    ${
      data.twitter
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/tw2.png" alt="logo"/></p> 
      <p class="inforVal">${data.twitter}</p>
      </div>`
        : ""
    }
    ${
      data.linkedin
        ? `<div class="information">
          <p class="inforLabel"><img class="infor-logo" src="img/in2.png" alt="logo"/></p> 
      <p class="inforVal">${data.linkedin}</p>
      </div>`
        : ""
    }
  
    </div>
    </div>
  `
      : ""
  }
    ${
      data.skills.length !== 0
        ? `   <div class="skills informationContainer">
      <h3 class="inforHeader shouldNotBreak">Skills</h3>
      <ul class="content-wrapper">
      ${data.skills
        .map(
          (skill) =>
            `${skill ? `<li class="shouldNotBreak">${skill}</li>` : ""}`
        )
        .join("")}
      </ul>
      </div>
      `
        : ""
    }
    
  
      ${
        data.interest.length !== 0
          ? `   <div class="interest informationContainer">
        <h3 class="inforHeader shouldNotBreak">Interest</h3>
        <ul class="content-wrapper">
        ${data.interest
          .map((intr) => `<li class="shouldNotBreak">${intr}</li>`)
          .join("")}
        </ul>
      </div>
        `
          : ""
      }
      ${
        data.languages.length !== 0
          ? `
        <div class="languages informationContainer">
        <h3 class="inforHeader shouldNotBreak">Languages</h3>
      ${data.languages
        .map(
          (val) => `
          ${
            val.language
              ? `
            <div class="language content-wrapper">
            <p class="theLang shouldNotBreak">${val.language}</p>
            <div class="theLevel shouldNotBreak"><span class="theLevelLoader" style="width: ${val.level};"></span></div>
            </div> 
            `
              : ""
          }
      
      `
        )
        .join("")}
        </div>
        `
          : ""
      }
${
  data.reffrences.length !== 0
    ? `<div class="references informationContainer">
<h3 class="inforHeader shouldNotBreak">Refrence</h3>
${data.reffrences
  .map((ref) => {
    if (ref.language || ref.langLevel) return;
    return `
  <div class="reference content-wrapper">
  <span></span>
  ${
    ref.refrenceName
      ? `<p class="refName shouldNotBreak">${ref.refrenceName}</p>`
      : ""
  }
  ${
    ref.referenceTitleAndOrg
      ? `<p class="titleandorg shouldNotBreak">${ref.referenceTitleAndOrg} </p>`
      : ""
  }
  ${
    ref.refrenceEmail
      ? ` <p class="email shouldNotBreak">${ref.refrenceEmail}</p>`
      : ""
  }
   </div>
`;
  })
  .join("")}
</div>
`
    : ""
}
        </div>
  
    <div class="large-content">
      
      ${
        data.profile
          ? `
        <div class="profile informationContainer">
      <h3 class="inforHeader shouldNotBreak">Profile</h3>
      <p>
      ${data.profile}  
      </p>
    </div>`
          : ""
      }
  
    ${
      data.experiences.length !== 0
        ? `
    <div class="recent-experience informationContainer">
    <h3 class="inforHeader shouldNotBreak">Experience</h3>
      ${data.experiences
        .map((experience) => {
          return `${
            Object.keys(experience).length !== 0
              ? `<div class="experience content-wrapper">
      
                            <div class="inner-content-wrapper">
      
         <div class="box-for-title-and-org shouldNotBreak">
        ${
          experience.jobTitle
            ? ` <p class="jobtitle">${experience.jobTitle}</p>`
            : ""
        }
        
        <div class="box-for-org-city-and-org">
        ${
          experience.orgAddress
            ? ` <p class="organizationAndAddress">${experience.orgAddress}</p>`
            : ""
        }/
        ${
          experience.orgCity
            ? `<p class="organizationAndAddress">${
                experience.orgCity + ","
              }</p>`
            : ""
        }
        ${
          experience.orgState
            ? ` <p class="sorgState">${experience.orgState}</p>`
            : ""
        }
       </div>  
       </div>
       <span class="internal-line"></span>

      <div class="start-and-end-date shouldNotBreak">
      ${
        experience.experiencestarts
          ? ` <p class="start">${convertToFullYear(
              experience.experiencestarts
            )}</p>`
          : ""
      }
      ${experience.experienceends ? ` <p class="end">-</p>` : ""}  
       ${
         experience.experienceends
           ? ` <p class="end">${convertToFullYear(
               experience.experienceends
             )}</p>`
           : ""
       }  
         
       
       
       </div>
        </div>
        ${
          findDuty(experience.experience) !== undefined &&
          findDuty(experience.experience) !== null
            ? findDuty(experience.experience)
            : ""
        }
       
      </div>`
              : ""
          }`;
        })
        .join("")}
      
         
    </div>`
        : ""
    }
   
  
    ${
      data.educations.length !== 0
        ? `
  
    <div class="educational-background informationContainer">
    <h3 class="inforHeader shouldNotBreak">Education</h3>
    ${data.educations
      .map((edu) => {
        return `<div class="education content-wrapper">
      
      
        <div class="start-and-end-date shouldNotBreak">
      ${
        edu.educationstarts
          ? `<p class="start">${convertToFullYear(edu.educationstarts)}</p>`
          : ""
      }
        
        
        ${
          edu.educationends
            ? `<p>-</p><p class="end">${convertToFullYear(
                edu.educationends
              )}</p>`
            : ""
        }
        
      </div>
      <p class="internal-line"></p>

      <div class="inner-content-wrapper">

      <p class="qualification shouldNotBreak">${
        edu.qualification ? edu.qualification : ""
      }</p>
      <p class="school-and-address shouldNotBreak">
      ${edu.eduAndAddress ? edu.eduAndAddress : ""}
      </p>
    </div>
    </div>
    `;
      })
      .join("")}
  </div>
    `
        : ""
    }
    
  
   
    ${
      data.certifications.length !== 0
        ? `<div class="certification informationContainer">
      <h3 class="inforHeader shouldNotBreak">Certification</h3>
      <ul class="content-wrapper">
      ${data.certifications
        .map((cert) => `<li class="shouldNotBreak">${cert}</li>`)
        .join("")}
      </ul>
      </div>
      `
        : ""
    }
        </div>
      </div>
  `;
    }
  }
  return marckup;
};

const findDuty = (expData) => {
  if (!Array.isArray(expData)) return "";
  let marckup = [];
  expData.forEach((val) => {
    if (val !== "" && val !== undefined && val !== null)
      marckup.push(`<li>${val}</li>`);
  });

  return `<ul class="ul">${marckup.join("")}</ul>`;
};
