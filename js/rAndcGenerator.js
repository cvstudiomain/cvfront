function capitalizeFirstLetter(string) {
  const wordsInString = string?.toLowerCase().split(" ");
  const fixedString = wordsInString?.map((stringVal) => stringVal.charAt(0).toUpperCase() + stringVal.slice(1))
    .join(" ");
  return fixedString;
}
const useInitial = function (data) {
  
  return data?.split(" ")
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
    <h1 class="user-name">${capitalizeFirstLetter(data.fullName)}</h1>
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
            crossOrigin="anonymous" 
            
            
            />
            </div>
            </div>`
         : ""
     } 
   
  
  <div class="large-content">
    <div class="letterContainer" >
      <ul>
        ${data.receipient ? `<li>${data.receipient}</li>` : ""}
        ${data.compenyname ? `<li>${data.compenyname}</li>` : ""}
        ${data.streetaddress ? `<li>${data.streetaddress}</li>` : ""}
        <li>${data.city ? data.city + "," : ""} ${
        data.state ? data.state : ""
      }</li>
        <li>${new Date(data.date).toDateString()}</li>
      </ul>
      <br />
      <div contenteditable="false" id="letter">
        ${data.theletter.replaceAll("\n", "<br />")}
      </div>
    </div>
  </div>
 
  
  <div class="tiny-content">
    <div class="contact-information informationContainer">
      <h3 class="inforHeader">Contact information</h3>
      <div class="content-wrapper">
        ${
          data.email
            ? `<div class="information">
          <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653195634/erutubs/mail-outline_agcm2p.png
      "
      alt=""
      class="logo"
      /></p>
          <p class="inforVal">${data.email}</p>
        </div>`
            : ""
        }
      ${
        data.phoneNumber
          ? `
        <div class="information">
           <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653196785/erutubs/call-outline_mhtw25.png"
      alt=""
      class="logo"
      /></p>
          <p class="inforVal">${data.phoneNumber}</p>
        </div>`
          : ""
      }
       
${
  data.address
    ? `
        <div class="information">
           <p class="inforLabel"><img
        src="https://res.cloudinary.com/erutubs/image/upload/v1653197040/erutubs/location-outline_udc7ib.png"
        alt=""
        class="logo"
        /></p>
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
    <h1 class="user-name">${capitalizeFirstLetter(data.fullName)}</h1>
    ${
      data.profession
        ? `
      <p class="profession">${data.profession}</p>
      `
        : ""
    }
  </div>
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
         crossOrigin="anonymous" 
         
         
         />
         </div>
         </div>`
      : ""
  } 

  
    <div class="contact-information informationContainer">
      <h3 class="inforHeader">Contact information</h3>
      <div class="content-wrapper">
        ${
          data.email
            ? `<div class="information">
          <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653195634/erutubs/mail-outline_agcm2p.png
      "
      alt=""
      class="email-logo"
      /></p>
          <p class="inforVal">${data.email}</p>
        </div>`
            : ""
        }
  ${
    data.phoneNumber
      ? `
        <div class="information">
           <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653196785/erutubs/call-outline_mhtw25.png"
      alt=""
      class="logo"
      /></p>
          <p class="inforVal">${data.phoneNumber}</p>
        </div>`
      : ""
  }
${
  data.address
    ? `  
        <div class="information">
           <p class="inforLabel"><img
        src="https://res.cloudinary.com/erutubs/image/upload/v1653197040/erutubs/location-outline_udc7ib.png"
        alt=""
        class="logo"
        /></p>
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
        ${data.receipient ? `<li>${data.receipient}</li>` : ""}
        ${data.compenyname ? `<li>${data.compenyname}</li>` : ""}
        ${data.streetaddress ? `<li>${data.streetaddress}</li>` : ""}
        <li>${data.city ? data.city + "," : ""} ${
        data.state ? data.state : ""
      }</li>
        <li>${new Date(data.date).toDateString()}</li>
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
         crossOrigin="anonymous" 
         
         
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
          <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653195634/erutubs/mail-outline_agcm2p.png
      "
      alt=""
      class="email-logo"
      /></p>
          <p class="inforVal">${data.email}</p>
        </div>`
            : ""
        }
  ${
    data.phoneNumber
      ? `
        <div class="information">
           <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653196785/erutubs/call-outline_mhtw25.png"
      alt=""
      class="logo"
      /></p>
          <p class="inforVal">${data.phoneNumber}</p>
        </div>`
      : ""
  }
${
  data.address
    ? `  
        <div class="information">
           <p class="inforLabel"><img
        src="https://res.cloudinary.com/erutubs/image/upload/v1653197040/erutubs/location-outline_udc7ib.png"
        alt=""
        class="logo"
        /></p>
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
    <h1 class="user-name">${capitalizeFirstLetter(data.fullName)}</h1>
  </div>
  
  <div class="large-content">
    <div class="letterContainer" >
      <ul>
        ${data.receipient ? `<li>${data.receipient}</li>` : ""}
        ${data.compenyname ? `<li>${data.compenyname}</li>` : ""}
        ${data.streetaddress ? `<li>${data.streetaddress}</li>` : ""}
        <li>${data.city ? data.city + "," : ""} ${
        data.state ? data.state : ""
      }</li>
        <li>${new Date(data.date).toDateString()}</li>
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
          <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653195634/erutubs/mail-outline_agcm2p.png
      "
      alt=""
      class="email-logo"
      /></p>
          <p class="inforVal">${data.email}</p>
        </div>`
            : ""
        }
  ${
    data.phoneNumber
      ? `
        <div class="information">
           <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653196785/erutubs/call-outline_mhtw25.png"
      alt=""
      class="logo"
      /></p>
          <p class="inforVal">${data.phoneNumber}</p>
        </div>`
      : ""
  }
${
  data.address
    ? `  
        <div class="information">
           <p class="inforLabel"><img
        src="https://res.cloudinary.com/erutubs/image/upload/v1653197040/erutubs/location-outline_udc7ib.png"
        alt=""
        class="logo"
        /></p>
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
               crossOrigin="anonymous" 
               
               
               />
               </div>
               </div>`
            : ""
        } 
      
  
          <h1 class="user-name">${capitalizeFirstLetter(data.fullName)}</h1>
        </div>
      </div>
    </div>
  </div>
  
  <div class="large-content">
    <div class="letterContainer" >
      <ul>
        ${data.receipient ? `<li>${data.receipient}</li>` : ""}
        ${data.compenyname ? `<li>${data.compenyname}</li>` : ""}
        ${data.streetaddress ? `<li>${data.streetaddress}</li>` : ""}
        <li>${data.city ? data.city + "," : ""} ${
        data.state ? data.state : ""
      }</li>
        <li>${new Date(data.date).toDateString()}</li>
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
         crossOrigin="anonymous" 
         
         
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
          <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653195634/erutubs/mail-outline_agcm2p.png
      "
      alt=""
      class="email-logo"
      /></p>
          <p class="inforVal">${data.email}</p>
        </div>`
            : ""
        }
  ${
    data.phoneNumber
      ? `
        <div class="information">
           <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653196785/erutubs/call-outline_mhtw25.png"
      alt=""
      class="logo"
      /></p>
          <p class="inforVal">${data.phoneNumber}</p>
        </div>`
      : ""
  }
${
  data.address
    ? `  
        <div class="information">
           <p class="inforLabel"><img
        src="https://res.cloudinary.com/erutubs/image/upload/v1653197040/erutubs/location-outline_udc7ib.png"
        alt=""
        class="logo"
        /></p>
          <p class="inforVal">${data.address}</p>
        </div>`
    : ""
}
      </div>
    </div>
  </div>
  <div class="user-name-and-profession">
  <h1 class="user-name">${capitalizeFirstLetter(data.fullName)}</h1>
  ${
    data.profession
      ? `
    <p class="profession">${data.profession}</p>
    `
      : ""
  }
</div>
  <ul>
  ${data.receipient ? `<li>${data.receipient}</li>` : ""}
  ${data.compenyname ? `<li>${data.compenyname}</li>` : ""}
  ${data.streetaddress ? `<li>${data.streetaddress}</li>` : ""}
  <li>${data.city ? data.city + "," : ""} ${data.state ? data.state : ""}</li>
  <li>${new Date(data.date).toDateString()}</li>
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
    <h1 class="user-name">${capitalizeFirstLetter(data.fullName)}</h1>
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
        ${data.receipient ? `<li>${data.receipient}</li>` : ""}
        ${data.compenyname ? `<li>${data.compenyname}</li>` : ""}
        ${data.streetaddress ? `<li>${data.streetaddress}</li>` : ""}
        <li>${data.city ? data.city + "," : ""} ${
        data.state ? data.state : ""
      }</li>
        <li>${new Date(data.date).toDateString()}</li>
      </ul>
      <br />
      <div contenteditable="false" id="letter">
        ${data.theletter.replaceAll("\n", "<br />")}
      </div>
    </div>
  </div>
  
  <div class="tiny-content">
    <div class="contact-information informationContainer">
      <h3 class="inforHeader">Contact information</h3>
      <div class="content-wrapper">
        ${
          data.email
            ? `<div class="information">
          <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653195634/erutubs/mail-outline_agcm2p.png
      "
      alt=""
      class="email-logo"
      /></p>
          <p class="inforVal">${data.email}</p>
        </div>`
            : ""
        }
  ${
    data.phoneNumber
      ? `
        <div class="information">
           <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653196785/erutubs/call-outline_mhtw25.png"
      alt=""
      class="logo"
      /></p>
          <p class="inforVal">${data.phoneNumber}</p>
        </div>`
      : ""
  }
${
  data.address
    ? `  
        <div class="information">
           <p class="inforLabel"><img
        src="https://res.cloudinary.com/erutubs/image/upload/v1653197040/erutubs/location-outline_udc7ib.png"
        alt=""
        class="logo"
        /></p>
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
         crossOrigin="anonymous" 
         
         
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
      <h1 class="user-name">${capitalizeFirstLetter(data.fullName)}</h1>
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
            crossOrigin="anonymous" 
            
            
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
           <h3 class="inforHeader">Profile</h3>
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
      <h3 class="inforHeader">Experience</h3>${data.experiences
        .map((experience) => {
          return `${
            Object.keys(experience).length !== 0
              ? `<div class="experience content-wrapper">
      <div class="start-and-end-date">
      ${
        experience.experiencestarts
          ? ` <p class="start">${experience.experiencestarts}</p>`
          : ""
      }

      ${
        experience.experienceends
          ? ` <p class="end">to</p>`
          : ""
      }  

       ${
         experience.experienceends
           ? ` <p class="end">${experience.experienceends}</p>`
           : ""
       }  
         
        </div>
  
        ${
          experience.jobTitle
            ? ` <p class="jobtitle">${experience.jobTitle}</p>`
            : ""
        }
       ${
         experience.experience
           ? ` <p class="experienceOptain">${experience.experience}</p>`
           : ""
       }
       ${
         experience.orgAddress
           ? ` <p class="organizationAndAddress">${experience.orgAddress}</p>`
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
  <h3 class="inforHeader">Education</h3>
  ${data.educations
    .map((edu) => {
      return `<div class="education content-wrapper">
    <div class="start-and-end-date">
      <p class="start">${edu.educationstarts}</p>
      <p>to</p>
      <p class="end">${edu.educationends}</p>
    </div>
    <p class="qualification">${edu.qualification}</p>
    <p class="school-and-address">
    ${edu.eduAndAddress}
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
    data.objective
      ? `
  
  <div class="objective informationContainer">
  <h3 class="inforHeader">Objective</h3>
  <p>
    ${data.objective}
    </p>
    </div>
    
  `
      : ""
  }
  
  ${
    data.certifications.length !== 0
      ? `
      <div class="certification informationContainer">
    <h3 class="inforHeader">Certification</h3>
    <ul class="content-wrapper">
    ${data.certifications.map((cert) => `<li>${cert}</li>`).join("")}
    </ul>
    </div>
    `
      : ""
  }
  </div>
  
  <div class="tiny-content">
  
  <div class="contact-information informationContainer">
  <h3 class="inforHeader">Contact information</h3>
  <div class="content-wrapper">
  ${
    data.email
      ? `<div class="information">
      <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653195634/erutubs/mail-outline_agcm2p.png
      "
      alt=""
      class="email-logo"
      /></p>
      <p class="inforVal">${data.email}</p>
    </div>
    `
      : ""
  } 
    ${
      data.phoneNumber
        ? ` <div class="information">
       <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653196785/erutubs/call-outline_mhtw25.png"
      alt=""
      class="logo"
      /></p>
      <p class="inforVal">${data.phoneNumber}</p>
    </div>`
        : ""
    }
     ${
       data.country
         ? `
      <div class="information">
        <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197226/erutubs/flag-outline_weqn13.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.country}</p>
    </div>`
         : ""
     }

     ${
       data.state
         ? `
      <div class="information">
           <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197743/erutubs/home-outline_vek3pk.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.state}</p>
    </div>`
         : ""
     }

     ${
       data.gender
         ? `<div class="information">
           <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197894/erutubs/person-circle-outline_kaaj5i.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.gender}</p>
    </div>`
         : ""
     }
    ${
      data.address
        ? `<div class="information">
       <p class="inforLabel"><img
        src="https://res.cloudinary.com/erutubs/image/upload/v1653197040/erutubs/location-outline_udc7ib.png"
        alt=""
        class="logo"
        /></p>
      <p class="inforVal">${data.address}</p>
    </div>
      `
        : ""
    }
    ${
      data.maritalstatus
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198037/erutubs/people-outline_peg7gy.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.maritalstatus}</p>
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
    <h3 class="inforHeader">Social media links</h3>
    <div class="content-wrapper">
    ${
      data.facebook
        ? `<div class="information">
        <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198193/erutubs/logo-facebook_a82wc9.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.facebook}</p>
      </div>`
        : ""
    }
    ${
      data.instagram
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198415/erutubs/logo-instagram_jeo4pu.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.instagram}</p>
      </div>`
        : ""
    }
    
    ${
      data.twitter
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198454/erutubs/logo-twitter_qx4nej.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.twitter}</p>
      </div>`
        : ""
    }
    ${
      data.linkedin
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198416/erutubs/logo-linkedin_upve1j.png" alt="" class="logo" /></p> 

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
    <h3 class="inforHeader">Skills</h3>
    <ul class="content-wrapper">
    ${data.skills
      .map((skill) => `${skill ? `<li>${skill}</li>` : ""}`)
      .join("")}
      </ul>
      </div>
      `
      : ""
  }
         ${
           data.reffrences.length !== 0
             ? `<div class="references informationContainer">
        <h3 class="inforHeader">Refrence</h3>
        ${data.reffrences
          .map((ref) => {
            return `
            <div class="reference content-wrapper">
            <p class="refName">${ref.refrenceName}</p>
            <p class="titleandorg">
  ${ref.referenceTitleAndOrg}
  </p>
  <p class="email">${ref.refrenceEmail}</p>
  </div>
  `;
          })
          .join("")}
  
          </div>
          `
             : ""
         }
        
        ${
          data.interest.length !== 0
            ? `   <div class="interest informationContainer">
          <h3 class="inforHeader">Interest</h3>
          <ul class="content-wrapper">
          ${data.interest.map((intr) => `<li>${intr}</li>`).join("")}
          </ul></div>`
            : ""
        }
        </div>
          
        </div>
        `;
    }
    if (data.template.template === "resume2") {
      marckup = `  <div id="${data._id}" class="template resume rl template2">
      
    <div class="user-name-and-profession">
      <h1 class="user-name">${capitalizeFirstLetter(data.fullName)}</h1>
      <p class="profession">${data.profession}</p>
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
            crossOrigin="anonymous" 
            
            
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
        <h3 class="inforHeader">Contact information</h3>
        <div class="content-wrapper">
        ${
          data.email
            ? `<div class="information">
            <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653195634/erutubs/mail-outline_agcm2p.png
      "
      alt=""
      class="email-logo"
      /></p>
            <p class="inforVal">${data.email}</p>
          </div>
          `
            : ""
        }  
          ${
            data.phoneNumber
              ? ` <div class="information">
             <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653196785/erutubs/call-outline_mhtw25.png"
      alt=""
      class="logo"
      /></p>
            <p class="inforVal">${data.phoneNumber}</p>
          </div>`
              : ""
          }
           ${
             data.country
               ? `
            <div class="information">
              <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197226/erutubs/flag-outline_weqn13.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.country}</p>
          </div>`
               : ""
           }
           ${
             data.state
               ? `
            <div class="information">
                 <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197743/erutubs/home-outline_vek3pk.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.state}</p>
          </div>`
               : ""
           }
           ${
             data.gender
               ? `<div class="information">
                 <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197894/erutubs/person-circle-outline_kaaj5i.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.gender}</p>
          </div>`
               : ""
           }
          ${
            data.address
              ? `<div class="information">
             <p class="inforLabel"><img
        src="https://res.cloudinary.com/erutubs/image/upload/v1653197040/erutubs/location-outline_udc7ib.png"
        alt=""
        class="logo"
        /></p>
            <p class="inforVal">${data.address}</p>
          </div>
            `
              : ""
          }
          ${
            data.maritalstatus
              ? `<div class="information">
                <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198037/erutubs/people-outline_peg7gy.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.maritalstatus}</p>
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
    <h3 class="inforHeader">Social media links</h3>
    <div class="content-wrapper">
    ${
      data.facebook
        ? `<div class="information">
        <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198193/erutubs/logo-facebook_a82wc9.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.facebook}</p>
      </div>`
        : ""
    }
    ${
      data.instagram
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198415/erutubs/logo-instagram_jeo4pu.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.instagram}</p>
      </div>`
        : ""
    }
    
    ${
      data.twitter
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198454/erutubs/logo-twitter_qx4nej.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.twitter}</p>
      </div>`
        : ""
    }
    ${
      data.linkedin
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198416/erutubs/logo-linkedin_upve1j.png" alt="" class="logo" /></p> 

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
      <h3 class="inforHeader">Skills</h3>
      <ul class="content-wrapper">
      ${data.skills.map((skill) => `<li>${skill}</li>`).join("")}
      </ul></div>`
         : ""
     }
  
     ${
       data.reffrences.length !== 0
         ? `
     <div class="references informationContainer">
     <h3 class="inforHeader">Refrence</h3>
        ${data.reffrences
          .map((ref) => {
            return `
  <div class="reference content-wrapper">
  <p class="refName">${ref.refrenceName}</p>
  <p class="titleandorg">
  ${ref.referenceTitleAndOrg}
  </p>
  <p class="email">${ref.refrenceEmail}</p>
  </div>
  `;
          })
          .join("")}
  
  </div>
  `
         : ""
     }
        ${
          data.interest.length !== 0
            ? `   <div class="interest informationContainer">
          <h3 class="inforHeader">Interest</h3>
          <ul class="content-wrapper">
          ${data.interest
            .map((intr) => {
              return `<li>${intr}</li>`;
            })
            .join("")}
        </ul></div>`
            : ""
        }
      </div>
      
  
      <div class="large-content">
     ${
       data.profile
         ? `<div class="profile informationContainer">
           <h3 class="inforHeader">Profile</h3>
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
    <h3 class="inforHeader">Experience</h3>${data.experiences
      .map((experience) => {
        return `${
          Object.keys(experience).length !== 0
            ? `<div class="experience content-wrapper">
    <div class="start-and-end-date">
    ${
      experience.experiencestarts
        ? ` <p class="start">${experience.experiencestarts}</p>`
        : ""
    }
    ${
      experience.experienceends
        ? ` <p class="end">to</p>`
        : ""
    }  
     ${
       experience.experienceends
         ? ` <p class="end">${experience.experienceends}</p>`
         : ""
     }  
       
      </div>

      ${
        experience.jobTitle
          ? ` <p class="jobtitle">${experience.jobTitle}</p>`
          : ""
      }
     ${
       experience.experience
         ? ` <p class="experienceOptain">${experience.experience}</p>`
         : ""
     }
     ${
       experience.orgAddress
         ? ` <p class="organizationAndAddress">${experience.orgAddress}</p>`
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
  <h3 class="inforHeader">Education</h3>
  ${data.educations
    .map((edu) => {
      return `<div class="education content-wrapper">
  <div class="start-and-end-date">
    <p class="start">${edu.educationstarts}</p>
    <p>to</p>
    <p class="end">${edu.educationends}</p>
  </div>
  <p class="qualification">${edu.qualification}</p>
  <p class="school-and-address">
  ${edu.eduAndAddress}
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
      <h3 class="inforHeader">Certification</h3>
      <ul class="content-wrapper">
      ${data.certifications.map((cert) => `<li>${cert}</li>`).join("")}
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
          <div class="passport-box">
          ${
            data.images
              ? `<img
            src="${data.images.url}"
            alt=""
            class="passport"
            crossOrigin="anonymous" 
            
            
            />`
              : `<h1 class="initials">${useInitial(data.fullName)}</h1>`
          } 
          </div>
          <div class="date-of-birth">
            <p class="dateOfBirth">date of birth:</p>
            <p>${data.dateofbirth}</p>
          </div>
        </div>
  
      ${
        data.profile
          ? `
        <div class="profile informationContainer">
      <h3 class="inforHeader">Profile</h3>
      <p>
      ${data.profile}  
      </p>
      </div>`
          : ""
      }
      
      </div>
      <div class="user-name-and-profession">
      <p class="profession">${data.profession}</p>
         <h1 class="user-name">${capitalizeFirstLetter(data.fullName)}</h1>
       </div>
  
  
      <div class="tiny-content">
  
        <div class="contact-information informationContainer">
        <h3 class="inforHeader">Contact information</h3>
        <div class="content-wrapper">
        ${
          data.email
            ? `<div class="information">
            <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653195634/erutubs/mail-outline_agcm2p.png
      "
      alt=""
      class="email-logo"
      /></p>
            <p class="inforVal">${data.email}</p>
          </div>
          `
            : ""
        }  
          ${
            data.phoneNumber
              ? ` <div class="information">
             <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653196785/erutubs/call-outline_mhtw25.png"
      alt=""
      class="logo"
      /></p>
            <p class="inforVal">${data.phoneNumber}</p>
          </div>`
              : ""
          }
           ${
             data.country
               ? `
            <div class="information">
              <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197226/erutubs/flag-outline_weqn13.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.country}</p>
          </div>`
               : ""
           }
           ${
             data.state
               ? `
            <div class="information">
                 <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197743/erutubs/home-outline_vek3pk.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.state}</p>
          </div>`
               : ""
           }
           ${
             data.gender
               ? `<div class="information">
                 <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197894/erutubs/person-circle-outline_kaaj5i.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.gender}</p>
          </div>`
               : ""
           }
          ${
            data.address
              ? `<div class="information">
             <p class="inforLabel"><img
        src="https://res.cloudinary.com/erutubs/image/upload/v1653197040/erutubs/location-outline_udc7ib.png"
        alt=""
        class="logo"
        /></p>
            <p class="inforVal">${data.address}</p>
          </div>
            `
              : ""
          }
          ${
            data.maritalstatus
              ? `<div class="information">
                <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198037/erutubs/people-outline_peg7gy.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.maritalstatus}</p>
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
    <h3 class="inforHeader">Social media links</h3>
    <div class="content-wrapper">
    ${
      data.facebook
        ? `<div class="information">
        <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198193/erutubs/logo-facebook_a82wc9.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.facebook}</p>
      </div>`
        : ""
    }
    ${
      data.instagram
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198415/erutubs/logo-instagram_jeo4pu.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.instagram}</p>
      </div>`
        : ""
    }
    
    ${
      data.twitter
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198454/erutubs/logo-twitter_qx4nej.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.twitter}</p>
      </div>`
        : ""
    }
    ${
      data.linkedin
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198416/erutubs/logo-linkedin_upve1j.png" alt="" class="logo" /></p> 

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
      <h3 class="inforHeader">Skills</h3>
      <ul class="content-wrapper">
      ${data.skills
        .map((skill) => `${skill ? `<li>${skill}</li>` : ""}`)
        .join("")}
      </ul>
      </div>
      `
         : ""
     }
  
         ${
           data.reffrences.length !== 0
             ? `<div class="references informationContainer">
        <h3 class="inforHeader">Refrence</h3>
        ${data.reffrences
          .filter((val) => val !== {})
          .map((ref) => {
            return `
  <div class="reference content-wrapper">
  <p class="refName">${ref.refrenceName}</p>
  <p class="titleandorg">
  ${ref.referenceTitleAndOrg}
  </p>
  <p class="email">${ref.refrenceEmail}</p>
  </div>
  `;
          })
          .join("")}
  
  </div>
  `
             : ""
         }
  
      ${
        data.interest.length !== 0
          ? `   <div class="interest informationContainer">
        <h3 class="inforHeader">Interest</h3>
        <ul class="content-wrapper">
        ${data.interest.map((intr) => `<li>${intr}</li>`).join("")}
      </ul></div>`
          : ""
      }
    </div>
    <div class="large-content">
    ${
      data.experiences.length !== 0
        ? `
    <div class="recent-experience informationContainer">
    <h3 class="inforHeader">Experience</h3>${data.experiences
      .map((experience) => {
        return `${
          Object.keys(experience).length !== 0
            ? `<div class="experience content-wrapper">
    <div class="start-and-end-date">
    ${
      experience.experiencestarts
        ? ` <p class="start">${experience.experiencestarts}</p>`
        : ""
    }
    ${
      experience.experienceends
        ? ` <p class="end">to</p>`
        : ""
    }  

     ${
       experience.experienceends
         ? ` <p class="end">${experience.experienceends}</p>`
         : ""
     }  
       
      </div>

      ${
        experience.jobTitle
          ? ` <p class="jobtitle">${experience.jobTitle}</p>`
          : ""
      }
     ${
       experience.experience
         ? ` <p class="experienceOptain">${experience.experience}</p>`
         : ""
     }
     ${
       experience.orgAddress
         ? ` <p class="organizationAndAddress">${experience.orgAddress}</p>`
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
  <h3 class="inforHeader">Education</h3>
  ${data.educations
    .filter((val) => val !== {})
    .map((edu) => {
      return `<div class="education content-wrapper">
  <div class="start-and-end-date">
  <p class="start">${edu.educationstarts}</p>
  <p>to</p>
  <p class="end">${edu.educationends}</p>
  </div>
  <p class="qualification">${edu.qualification}</p>
  <p class="school-and-address">
  ${edu.eduAndAddress}
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
          data.objective
            ? `
  
  <div class="objective informationContainer">
  <h3 class="inforHeader">Objective</h3>
  <p>
    ${data.objective}
  </p>
  </div>
  
  `
            : ""
        }
  
         ${
           data.certifications.length !== 0
             ? `<div class="certification informationContainer">
      <h3 class="inforHeader">Certification</h3>
      <ul class="content-wrapper">
      ${data.certifications.map((cert) => `<li>${cert}</li>`).join("")}
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
      
      <div class="contact-information informationContainer">
  
        <div class="contact-container">
        <div class="content-wrapper">
        ${
          data.email
            ? `<div class="information">
            <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653195634/erutubs/mail-outline_agcm2p.png
      "
      alt=""
      class="email-logo"
      /></p>
            <p class="inforVal">${data.email}</p>
          </div>
          `
            : ""
        }  
          ${
            data.phoneNumber
              ? ` <div class="information">
             <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653196785/erutubs/call-outline_mhtw25.png"
      alt=""
      class="logo"
      /></p>
            <p class="inforVal">${data.phoneNumber}</p>
          </div>`
              : ""
          }
           ${
             data.country
               ? `
            <div class="information">
              <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197226/erutubs/flag-outline_weqn13.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.country}</p>
          </div>`
               : ""
           }
           ${
             data.state
               ? `
            <div class="information">
                 <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197743/erutubs/home-outline_vek3pk.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.state}</p>
          </div>`
               : ""
           }
           </div>
          
           <div class="content-wrapper secondContent">
           ${
             data.gender
               ? `<div class="information">
               <p class="inforVal">${data.gender}</p>
               <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197894/erutubs/person-circle-outline_kaaj5i.png" alt="" class="logo" /></p> 

          </div>`
               : ""
           }
          ${
            data.address
              ? `<div class="information">
              <p class="inforVal">${data.address}</p>
             <p class="inforLabel"><img
        src="https://res.cloudinary.com/erutubs/image/upload/v1653197040/erutubs/location-outline_udc7ib.png"
        alt=""
        class="logo"
        /></p>
          </div>
            `
              : ""
          }

          ${
            data.maritalstatus
              ? `<div class="information">
              <p class="inforVal">${data.maritalstatus}</p>
              <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198037/erutubs/people-outline_peg7gy.png" alt="" class="logo" /></p> 

          </div>
            `
              : ""
          }
         
          </div>
        </div>
      </div>
     
  
      <div class="user-name-and-profession">
     
        <div class="passportDateOfBirth">
          <div class="passport-box">
          ${
            data.images
              ? `<img
            src="${data.images.url}"
            alt=""
            class="passport"
            crossOrigin="anonymous" 
            
            
            />`
              : `<h1 class="initials">${useInitial(data.fullName)}</h1>`
          } 
          </div>
          <div class="date-of-birth">
            <p class="dateOfBirth">date of birth:</p>
            <p>${data.dateofbirth}</p>
          </div>
        </div>
  
        
        <h1 class="user-name">${capitalizeFirstLetter(data.fullName)}</h1>
        <p class="profession">${data.profession}</p>
      
      </div>
  
      <div class="tiny-content">
      ${
        data.objective
          ? `
    
      <div class="objective informationContainer">
      <h3 class="inforHeader">Objective</h3>
      <p>
        ${data.objective}
      </p>
      </div>
      
      `
          : ""
      }
  
        ${
          data.twitter || data.instagram || data.facebook || data.linkedin
            ? `
    <div class="social-media-links informationContainer">
    <h3 class="inforHeader">Social media links</h3>
    <div class="content-wrapper">
    ${
      data.facebook
        ? `<div class="information">
        <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198193/erutubs/logo-facebook_a82wc9.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.facebook}</p>
      </div>`
        : ""
    }
    ${
      data.instagram
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198415/erutubs/logo-instagram_jeo4pu.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.instagram}</p>
      </div>`
        : ""
    }
    
    ${
      data.twitter
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198454/erutubs/logo-twitter_qx4nej.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.twitter}</p>
      </div>`
        : ""
    }
    ${
      data.linkedin
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198416/erutubs/logo-linkedin_upve1j.png" alt="" class="logo" /></p> 

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
      <h3 class="inforHeader">Skills</h3>
      <ul class="content-wrapper">
      ${data.skills
        .map((skill) => `${skill ? `<li>${skill}</li>` : ""}`)
        .join("")}
      </ul>
      </div>
      `
         : ""
     }
  
         ${
           data.reffrences.length !== 0
             ? `<div class="references informationContainer">
        <h3 class="inforHeader">Refrence</h3>
        ${data.reffrences
          .map((ref) => {
            return `
  <div class="reference content-wrapper">
  <p class="refName">${ref.refrenceName}</p>
  <p class="titleandorg">
  ${ref.referenceTitleAndOrg}
  </p>
  <p class="email">${ref.refrenceEmail}</p>
  </div>
  `;
          })
          .join("")}
  
  </div>
  `
             : ""
         }
         ${
           data.interest.length !== 0
             ? `   <div class="interest informationContainer">
          <h3 class="inforHeader">Interest</h3>
          <ul class="content-wrapper">
          ${data.interest.map((intr) => `<li>${intr}</li>`).join("")}
        </ul></div>`
             : ""
         }
      </div>
  
      <div class="large-content">
      ${
        data.profile
          ? `
        <div class="profile informationContainer">
      <h3 class="inforHeader">Profile</h3>
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
      <h3 class="inforHeader">Experience</h3>${data.experiences
        .map((experience) => {
          return `${
            Object.keys(experience).length !== 0
              ? `<div class="experience content-wrapper">
      <div class="start-and-end-date">
      ${
        experience.experiencestarts
          ? ` <p class="start">${experience.experiencestarts}</p>`
          : ""
      }
      ${
        experience.experienceends
          ? ` <p class="end">to</p>`
          : ""
      }  
       ${
         experience.experienceends
           ? ` <p class="end">${experience.experienceends}</p>`
           : ""
       }  
         
        </div>
  
        ${
          experience.jobTitle
            ? ` <p class="jobtitle">${experience.jobTitle}</p>`
            : ""
        }
       ${
         experience.experience
           ? ` <p class="experienceOptain">${experience.experience}</p>`
           : ""
       }
       ${
         experience.orgAddress
           ? ` <p class="organizationAndAddress">${experience.orgAddress}</p>`
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
      <h3 class="inforHeader">Education</h3>
      ${data.educations
        .map((edu) => {
          return `<div class="education content-wrapper">
        <div class="start-and-end-date">
          <p class="start">${edu.educationstarts}</p>
          <p>to</p>
          <p class="end">${edu.educationends}</p>
        </div>
        <p class="qualification">${edu.qualification}</p>
        <p class="school-and-address">
        ${edu.eduAndAddress}
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
        <h3 class="inforHeader">Certification</h3>
        <ul class="content-wrapper">
        ${data.certifications.map((cert) => `<li>${cert}</li>`).join("")}
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
            crossOrigin="anonymous" 
            
            
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
        <h3 class="inforHeader">Contact information</h3>
        <div class="content-wrapper">
        ${
          data.email
            ? `<div class="information">
            <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653195634/erutubs/mail-outline_agcm2p.png
      "
      alt=""
      class="email-logo"
      /></p>
            <p class="inforVal">${data.email}</p>
          </div>
          `
            : ""
        }  
          ${
            data.phoneNumber
              ? ` <div class="information">
             <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653196785/erutubs/call-outline_mhtw25.png"
      alt=""
      class="logo"
      /></p>
            <p class="inforVal">${data.phoneNumber}</p>
          </div>`
              : ""
          }
           ${
             data.country
               ? `
            <div class="information">
              <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197226/erutubs/flag-outline_weqn13.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.country}</p>
          </div>`
               : ""
           }
           ${
             data.state
               ? `
            <div class="information">
                 <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197743/erutubs/home-outline_vek3pk.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.state}</p>
          </div>`
               : ""
           }
           ${
             data.gender
               ? `<div class="information">
                 <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197894/erutubs/person-circle-outline_kaaj5i.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.gender}</p>
          </div>`
               : ""
           }
          ${
            data.address
              ? `<div class="information">
             <p class="inforLabel"><img
        src="https://res.cloudinary.com/erutubs/image/upload/v1653197040/erutubs/location-outline_udc7ib.png"
        alt=""
        class="logo"
        /></p>
            <p class="inforVal">${data.address}</p>
          </div>
            `
              : ""
          }
          ${
            data.maritalstatus
              ? `<div class="information">
                <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198037/erutubs/people-outline_peg7gy.png" alt="" class="logo" /></p> 

            <p class="inforVal">${data.maritalstatus}</p>
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
    <h3 class="inforHeader">Social media links</h3>
    <div class="content-wrapper">
    ${
      data.facebook
        ? `<div class="information">
        <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198193/erutubs/logo-facebook_a82wc9.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.facebook}</p>
      </div>`
        : ""
    }

    ${
      data.instagram
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198415/erutubs/logo-instagram_jeo4pu.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.instagram}</p>
      </div>`
        : ""
    }
    
    ${
      data.twitter
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198454/erutubs/logo-twitter_qx4nej.png" alt="" class="logo" /></p> 

      <p class="inforVal">${data.twitter}</p>
      </div>`
        : ""
    }

    ${
      data.linkedin
        ? `<div class="information">
          <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198416/erutubs/logo-linkedin_upve1j.png" alt="" class="logo" /></p> 

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
      <h3 class="inforHeader">Skills</h3>
      <ul class="content-wrapper">
      ${data.skills
        .map((skill) => `${skill ? `<li>${skill}</li>` : ""}`)
        .join("")}
      </ul>
      </div>
      `
        : ""
    }
    
  
      ${
        data.reffrences.length !== 0
          ? `<div class="references informationContainer">
        <h3 class="inforHeader">Refrence</h3>
        ${data.reffrences
          .map((ref) => {
            return `
  <div class="reference content-wrapper">
  <p class="refName">${ref.refrenceName}</p>
  <p class="titleandorg">
  ${ref.referenceTitleAndOrg}
  </p>
  <p class="email">${ref.refrenceEmail}</p>
  </div>
  `;
          })
          .join("")}
  
  </div>
  `
          : ""
      }
      ${
        data.interest.length !== 0
          ? `   <div class="interest informationContainer">
        <h3 class="inforHeader">Interest</h3>
        <ul class="content-wrapper">
        ${data.interest.map((intr) => `<li>${intr}</li>`).join("")}
        </ul>
      </div>
        `
          : ""
      }
        </div>
  
    <div class="large-content">
      <div class="user-name-and-profession">
        <h1 class="user-name">${capitalizeFirstLetter(data.fullName)}</h1>
        <p class="profession">${data.profession}</p>
      </div>
      ${
        data.profile
          ? `
        <div class="profile informationContainer">
      <h3 class="inforHeader">Profile</h3>
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
    <h3 class="inforHeader">Experience</h3>${data.experiences
      .map((experience) => {
        return `${
          Object.keys(experience).length !== 0
            ? `<div class="experience content-wrapper">
    <div class="start-and-end-date">
    ${
      experience.experiencestarts
        ? ` <p class="start">${experience.experiencestarts}</p>`
        : ""
    }
    ${
      experience.experienceends
        ? ` <p class="end">to</p>`
        : ""
    }  
     ${
       experience.experienceends
         ? ` <p class="end">${experience.experienceends}</p>`
         : ""
     }  
       
      </div>

      ${
        experience.jobTitle
          ? ` <p class="jobtitle">${experience.jobTitle}</p>`
          : ""
      }
     ${
       experience.experience
         ? ` <p class="experienceOptain">${experience.experience}</p>`
         : ""
     }
     ${
       experience.orgAddress
         ? ` <p class="organizationAndAddress">${experience.orgAddress}</p>`
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
    <h3 class="inforHeader">Education</h3>
    ${data.educations
      .map((edu) => {
        return `<div class="education content-wrapper">
      <div class="start-and-end-date">
        <p class="start">${edu.educationstarts}</p>
        <p>to</p>
        <p class="end">${edu.educationends}</p>
      </div>
      <p class="qualification">${edu.qualification}</p>
      <p class="school-and-address">
      ${edu.eduAndAddress}
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
      data.objective
        ? `
  
    <div class="objective informationContainer">
    <h3 class="inforHeader">Objective</h3>
    <p>
      ${data.objective}
    </p>
    </div>
    
    `
        : ""
    }
    ${
      data.certifications.length !== 0
        ? `<div class="certification informationContainer">
      <h3 class="inforHeader">Certification</h3>
      <ul class="content-wrapper">
      ${data.certifications.map((cert) => `<li>${cert}</li>`).join("")}
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
      <h1 class="user-name">${capitalizeFirstLetter(data.fullName)}</h1>
      <p class="profession">${data.profession}</p>
    </div>
      <div class="large-content">
      ${
        data.profile
          ? `
        <div class="profile informationContainer">
      <h3 class="inforHeader">Profile</h3>
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
    <h3 class="inforHeader">Experience</h3>${data.experiences
      .map((experience) => {
        return `${
          Object.keys(experience).length !== 0
            ? `<div class="experience content-wrapper">
    <div class="start-and-end-date">
    ${
      experience.experiencestarts
        ? ` <p class="start">${experience.experiencestarts}</p>`
        : ""
    }
    ${
      experience.experienceends
        ? ` <p class="end">to</p>`
        : ""
    }  
     ${
       experience.experienceends
         ? ` <p class="end">${experience.experienceends}</p>`
         : ""
     }  
       
      </div>

      ${
        experience.jobTitle
          ? ` <p class="jobtitle">${experience.jobTitle}</p>`
          : ""
      }
     ${
       experience.experience
         ? ` <p class="experienceOptain">${experience.experience}</p>`
         : ""
     }
     ${
       experience.orgAddress
         ? ` <p class="organizationAndAddress">${experience.orgAddress}</p>`
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
    <h3 class="inforHeader">Education</h3>
    ${data.educations
      .map((edu) => {
        return `<div class="education content-wrapper">
      <div class="start-and-end-date">
        <p class="start">${edu.educationstarts}</p>
        <p>to</p>
        <p class="end">${edu.educationends}</p>
      </div>
      <p class="qualification">${edu.qualification}</p>
      <p class="school-and-address">
      ${edu.eduAndAddress}
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
      data.objective
        ? `
  
    <div class="objective informationContainer">
    <h3 class="inforHeader">Objective</h3>
    <p>
      ${data.objective}
    </p>
    </div>
    
    `
        : ""
    }
    ${
      data.certifications.length !== 0
        ? `<div class="certification informationContainer">
      <h3 class="inforHeader">Certification</h3>
      <ul class="content-wrapper">
      ${data.certifications.map((cert) => `<li>${cert}</li>`).join("")}
      </ul>
      </div>
      `
        : ""
    }
      </div>
  
      <div class="tiny-content">
      <div class="contact-information informationContainer">
      <h3 class="inforHeader">Contact information</h3>
      <div class="content-wrapper">
      ${
        data.email
          ? `<div class="information">
          <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653195634/erutubs/mail-outline_agcm2p.png
      "
      alt=""
      class="email-logo"
      /></p>
          <p class="inforVal">${data.email}</p>
        </div>
        `
          : ""
      }  
        ${
          data.phoneNumber
            ? ` <div class="information">
           <p class="inforLabel"><img
      src="https://res.cloudinary.com/erutubs/image/upload/v1653196785/erutubs/call-outline_mhtw25.png"
      alt=""
      class="logo"
      /></p>
          <p class="inforVal">${data.phoneNumber}</p>
        </div>`
            : ""
        }
         ${
           data.country
             ? `
          <div class="information">
            <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197226/erutubs/flag-outline_weqn13.png" alt="" class="logo" /></p> 

          <p class="inforVal">${data.country}</p>
        </div>`
             : ""
         }
         ${
           data.state
             ? `
          <div class="information">
               <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197743/erutubs/home-outline_vek3pk.png" alt="" class="logo" /></p> 

          <p class="inforVal">${data.state}</p>
        </div>`
             : ""
         }
         ${
           data.gender
             ? `<div class="information">
               <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653197894/erutubs/person-circle-outline_kaaj5i.png" alt="" class="logo" /></p> 

          <p class="inforVal">${data.gender}</p>
        </div>`
             : ""
         }
        ${
          data.address
            ? `<div class="information">
           <p class="inforLabel"><img
        src="https://res.cloudinary.com/erutubs/image/upload/v1653197040/erutubs/location-outline_udc7ib.png"
        alt=""
        class="logo"
        /></p>
          <p class="inforVal">${data.address}</p>
        </div>
          `
            : ""
        }
        ${
          data.maritalstatus
            ? `<div class="information">
              <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198037/erutubs/people-outline_peg7gy.png" alt="" class="logo" /></p> 

          <p class="inforVal">${data.maritalstatus}</p>
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
  <h3 class="inforHeader">Social media links</h3>
  <div class="content-wrapper">
  ${
    data.facebook
      ? `<div class="information">
      <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198193/erutubs/logo-facebook_a82wc9.png" alt="" class="logo" /></p> 

    <p class="inforVal">${data.facebook}</p>
    </div>`
      : ""
  }
  ${
    data.instagram
      ? `<div class="information">
        <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198415/erutubs/logo-instagram_jeo4pu.png" alt="" class="logo" /></p> 

    <p class="inforVal">${data.instagram}</p>
    </div>`
      : ""
  }
  
  ${
    data.twitter
      ? `<div class="information">
        <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198454/erutubs/logo-twitter_qx4nej.png" alt="" class="logo" /></p> 

    <p class="inforVal">${data.twitter}</p>
    </div>`
      : ""
  }
  ${
    data.linkedin
      ? `<div class="information">
        <p class="inforLabel"><img src="https://res.cloudinary.com/erutubs/image/upload/v1653198416/erutubs/logo-linkedin_upve1j.png" alt="" class="logo" /></p> 

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
    <h3 class="inforHeader">Skills</h3>
    <ul class="content-wrapper">
    ${data.skills
      .map((skill) => `${skill ? `<li>${skill}</li>` : ""}`)
      .join("")}
    </ul>
    </div>
    `
      : ""
  }
  
  
    ${
      data.reffrences.length !== 0
        ? `<div class="references informationContainer">
      <h3 class="inforHeader">Refrence</h3>
      ${data.reffrences
        .map((ref) => {
          return `
  <div class="reference content-wrapper">
  <p class="refName">${ref.refrenceName}</p>
  <p class="titleandorg">
  ${ref.referenceTitleAndOrg}
  </p>
  <p class="email">${ref.refrenceEmail}</p>
  </div>
  `;
        })
        .join("")}
  
  </div>
  `
        : ""
    }
    ${
      data.interest.length !== 0
        ? `   <div class="interest informationContainer">
      <h3 class="inforHeader">Interest</h3>
      <ul class="content-wrapper">
      ${data.interest.map((intr) => `<li>${intr}</li>`).join("")}
      </ul>
    </div>
      `
        : ""
    }
        
        <div class="passportDateOfBirth">
        <div class="passport-box">
        ${
          data.images
            ? `<img
          src="${data.images.url}"
          alt=""
          class="passport"
          crossOrigin="anonymous" 
          
          
          />`
            : `<h1 class="initials">${useInitial(data.fullName)}</h1>`
        } 
        </div>
        <div class="date-of-birth">
          <p class="dateOfBirth">date of birth:</p>
          <p>${data.dateofbirth}</p>
        </div>
      </div>
  
      </div>
    </div>`;
    }
  }
  return marckup;
};
