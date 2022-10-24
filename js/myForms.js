export const resumeformcontainer = function (onEdit, data, noPassport) {
  let editEdu = onEdit && data.educations.length !== 0;
  let editCert = onEdit && data.certifications.length !== 0;

  let editSkills = onEdit && data.skills.length !== 0;
  let editReff = onEdit && data.reffrences.length !== 0;
  let editLang = onEdit && data.languages.length !== 0;
  let editIntr = onEdit && data.interest.length !== 0;
  let editExpr = onEdit && data.experiences.length !== 0;

  return `
  
  <button type="button" class="btnCloseView closeForm">
    <i
      type="icon"
      class="fa fa-times icon-mobile-nav"
      aria-hidden="true"
    ></i>
  </button>
  <div class="cv-form" id="cv-form">
    <form class="form-style" id="s1">
      <div class="section-header">
        <h2>Personal Data</h2>
      </div>
      ${
        noPassport
          ? ""
          : `<p class="jobsInUk">
        <!-- Sorry you can't use photo for now. The feature is comming back soon! -->
        Jobs in Canada, USA, and UK do not mostly require photo
      </p>
      <div class="image-container">
        <div class="display_image2" ${
          onEdit &&
          `${
            data.images ? `style=background-image:url(${data.images.url})` : ""
          }`
        }></div>
          <span class="image-input" >Choose Image</span>
         
          </div>`
      }
     
          <div class="input-container">
          <div class="multi-line-input">
          <div class="inputBox">
          <label for="fullName">Full Name</label>
          <input
          type="text"
          class="inputTypeText fullName"
          name="fullName"
          value="${onEdit ? data.fullName : ""}"
          placeholder="Full name"
          />
          </div>
          <div class="inputBox">
          <label for="profession">Profession</label>

        <input
          type="text"
          class="inputTypeText"
          name="profession"
          value="${onEdit ? data.profession : ""}"
          placeholder="Enter profession"
        />
        </div>
        </div>
        <div class="multi-line-input">
        <div class="inputBox">
        <label for="email">Email</label>

        <input
        type="email"
          class="inputTypeText"
          name="email"
          value="${onEdit ? data.email : ""}"
          placeholder="Enter email"
          />
          </div>
          <div class="inputBox">
          <label for="phoneNumber">Phone Number</label>

          <input
          type="text"
          class="inputTypeText"
          name="phoneNumber"
          value="${onEdit ? data.phoneNumber : ""}"
          placeholder="Enter phone number"
        />
        </div>
        </div>
        <div class="multi-line-input">
          <div class="inputBox">
        <label for="state">State</label>
     
        <input
          type="text"
          class="inputTypeText"
          name="state"
          value="${onEdit ? data.state : ""}"
          placeholder="Enter state"
        />
        </div>
        <div class="inputBox">
        <label for="state">Address</label>

        <input
          type="text"
          class="inputTypeText"
          name="address"
          value="${onEdit ? data.address : ""}"
          placeholder="Enter address"
        />
        </div>
        </div>
        <div class="dateofbirth">
          <label for="dateofbirth">Date of birth: </label>
          <input
            type="date"
            class="dateofbirth"
            name="dateofbirth"
            value="${onEdit ? data.dateofbirth : ""}"
            placeholder="Date of birth"
          />
        </div>
        
        <div class="selectBox">
          <label for="gender">Gender:</label>
          <select id="gender" name="gender" value="">
          ${
            onEdit
              ? `<option value="${data.gender}">${data.gender}</option>`
              : `
            <option value="">Select</option>
              
              `
          }
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="selectBox">
          <label for="maritalstatus">Marital status:</label>
          <select id="maritalstatus" name="maritalstatus" value="">
          ${
            onEdit
              ? `<option value="${data.maritalstatus}">${data.maritalstatus}</option>`
              : `<option value="">Select</option>`
          }

            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
        </div>
        <div class="selectBox">
          <label for="country">Country:</label>
          <select id="country" name="country" value="">
          ${
            onEdit
              ? `<option value="${data.country}">${data.country}</option>`
              : ``
          }
            
          <option value="United States of America">
              United States of America
            </option>
            <option value="Afganistan">Afghanistan</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antigua & Barbuda">Antigua & Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bonaire">Bonaire</option>
            <option value="Bosnia & Herzegovina">
              Bosnia & Herzegovina
            </option>
            <option value="Botswana">Botswana</option>
            <option value="Brazil">Brazil</option>
            <option value="British Indian Ocean Ter">
              British Indian Ocean Ter
            </option>
            <option value="Brunei">Brunei</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Canary Islands">Canary Islands</option>
            <option value="Cape Verde">Cape Verde</option>
            <option value="Cayman Islands">Cayman Islands</option>
            <option value="Central African Republic">
              Central African Republic
            </option>
            <option value="Chad">Chad</option>
            <option value="Channel Islands">Channel Islands</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Christmas Island">Christmas Island</option>
            <option value="Cocos Island">Cocos Island</option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo">Congo</option>
            <option value="Cook Islands">Cook Islands</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Cote DIvoire">Cote DIvoire</option>
            <option value="Croatia">Croatia</option>
            <option value="Cuba">Cuba</option>
            <option value="Curaco">Curacao</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="East Timor">East Timor</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Falkland Islands">Falkland Islands</option>
            <option value="Faroe Islands">Faroe Islands</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="French Guiana">French Guiana</option>
            <option value="French Polynesia">French Polynesia</option>
            <option value="French Southern Ter">French Southern Ter</option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Great Britain">Great Britain</option>
            <option value="Greece">Greece</option>
            <option value="Greenland">Greenland</option>
            <option value="Grenada">Grenada</option>
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="Guam">Guam</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guinea">Guinea</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Honduras">Honduras</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="Indonesia">Indonesia</option>
            <option value="India">India</option>
            <option value="Iran">Iran</option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Isle of Man">Isle of Man</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Korea North">Korea North</option>
            <option value="Korea Sout">Korea South</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Laos">Laos</option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libya">Libya</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Macau">Macau</option>
            <option value="Macedonia">Macedonia</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Malawi">Malawi</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Martinique">Martinique</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mayotte">Mayotte</option>
            <option value="Mexico">Mexico</option>
            <option value="Midway Islands">Midway Islands</option>
            <option value="Moldova">Moldova</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Nambia">Nambia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherland Antilles">Netherland Antilles</option>
            <option value="Netherlands">
              Netherlands (Holland, Europe)
            </option>
            <option value="Nevis">Nevis</option>
            <option value="New Caledonia">New Caledonia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niue">Niue</option>
            <option value="Norfolk Island">Norfolk Island</option>
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau Island">Palau Island</option>
            <option value="Palestine">Palestine</option>
            <option value="Panama">Panama</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Phillipines">Philippines</option>
            <option value="Pitcairn Island">Pitcairn Island</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Qatar">Qatar</option>
            <option value="Republic of Montenegro">
              Republic of Montenegro
            </option>
            <option value="Republic of Serbia">Republic of Serbia</option>
            <option value="Reunion">Reunion</option>
            <option value="Romania">Romania</option>
            <option value="Russia">Russia</option>
            <option value="Rwanda">Rwanda</option>
            <option value="St Barthelemy">St Barthelemy</option>
            <option value="St Eustatius">St Eustatius</option>
            <option value="St Helena">St Helena</option>
            <option value="St Kitts-Nevis">St Kitts-Nevis</option>
            <option value="St Lucia">St Lucia</option>
            <option value="St Maarten">St Maarten</option>
            <option value="St Pierre & Miquelon">
              St Pierre & Miquelon
            </option>
            <option value="St Vincent & Grenadines">
              St Vincent & Grenadines
            </option>
            <option value="Saipan">Saipan</option>
            <option value="Samoa">Samoa</option>
            <option value="Samoa American">Samoa American</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome & Principe">Sao Tome & Principe</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Singapore">Singapore</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="Spain">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Swaziland">Swaziland</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syria">Syria</option>
            <option value="Tahiti">Tahiti</option>
            <option value="Taiwan">Taiwan</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Thailand">Thailand</option>
            <option value="Togo">Togo</option>
            <option value="Tokelau">Tokelau</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad & Tobago">Trinidad & Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Turks & Caicos Is">Turks & Caicos Is</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Erimates">
              United Arab Emirates
            </option>
            <option value="Uraguay">Uruguay</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Vatican City State">Vatican City State</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Virgin Islands (Brit)">
              Virgin Islands (Brit)
            </option>
            <option value="Virgin Islands (USA)">
              Virgin Islands (USA)
            </option>
            <option value="Wake Island">Wake Island</option>
            <option value="Wallis & Futana Is">Wallis & Futana Is</option>
            <option value="Yemen">Yemen</option>
            <option value="Zaire">Zaire</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
          </select>
        </div>
        </div>
      
     

      <div class="btn-box">
      <a href="#cvandresume-area" class="btn-span smoothmove" id="next1">next</a>
    </div>
  </form>
  <div class="form-style hiddenClass" id="s2">
    
    <div class="section-header">
      <h2>Educational Data</h2>
    </div>

    <div class="edu-container" style="width:100%;">
    <div class="all-edu" style="width:100%;">

    ${
      editEdu
        ? data.educations
            .map((edu, i) => {
              return `
    
    <form class="input-container single-edu">
    <h3 style="    background-color: #eaeaeb;
    width: 90%;
    padding: 5px;">${i + 1} of ${data.educations.length} Educations</h3>
    
      
    <div class="inputBox">
        <label for="qualification">Qualification</label>
        <input
          type="text"
          class="inputTypeText eduInputs"
          name="qualification"
          value="${edu.qualification}"
          placeholder="eg. BSC in Mathematics"
        />
      </div>

      <div class="inputBox">
        <label for="eduAndAddress">School and address</label>
        <textarea
          rows="2"
          name="eduAndAddress"
          class="eduInputs"
          value=""
          placeholder="eg. University of Derby (UK) England..."
        >${edu.eduAndAddress}</textarea>
      </div>

      <div class="date">
      <div class="start">
          <label for="startDate">Start date </label>
          <input
            type="date"
            class="startDate eduInputs"
            name="educationstarts"
            value="${edu.educationstarts}"
          />
        </div>
        <div class="end">
          <label for="endDate">End date </label>
          <input
            type="date"
            class="endDate eduInputs"
            name="educationends"
            value="${edu.educationends}"
          />
        </div>
        </div>

      <hr style="margin-bottom:16px" />
      </form>
    `;
            })
            .join("")
        : ""
    }
    
  <form class="input-container single-edu hiddenEduForm ${
    onEdit ? "hiddenClass" : ""
  }">
      
  <div class="inputBox">
      <label for="qualification">Qualification</label>
      <input
        type="text"
        class="inputTypeText eduInputs"
        name="qualification"
        value=""
        placeholder="eg. BSC in Mathematics"
      />
    </div>
  
    <div class="inputBox">
      <label for="eduAndAddress">School and address</label>
      <textarea
        rows="2"
        name="eduAndAddress"
        class="eduInputs"
        value=""
        placeholder="eg. University of Derby (UK) England..."
      ></textarea>
    </div>
  
    <div class="date">
      <div class="start">
        <label for="startDate">Start date </label>
        <input
          type="date"
          class="startDate eduInputs"
          name="educationstarts"
          value=""
        />
      </div>
        <div class="end">
        <label for="endDate">End date </label>
        <input
          type="date"
          class="endDate eduInputs"
          name="educationends"
          value=""
        />
      </div>
      </div>
      <hr style="margin-bottom:16px" />
   
      </form>
   
      </div>
      <button type="button" class="txt-area-btn  btnAddEducation">
      Another Education
    </button>
    </div>
   
    <div class="cert-container" style="width:100%;">
    <div class="input-container all-cert">
   
    <label for="certification">Certifications</label>
    ${
      editCert
        ? data.certifications
            .map((cert) => {
              return `
        <div class="inputBox single-cert">
        
        <textarea
          rows="2"
          class="certInput"
          name="certification"
          value=""
          placeholder="eg. The complete javaScript course 2022: from zero to hero.."
        >${cert}</textarea>
      

        </div>
        `;
            })
            .join("")
        : ""
    }
      
      <div class="inputBox hiddenCert ${
        editCert ? "hiddenClass" : ""
      } single-cert">
        <textarea
          rows="2"
          class="certInput new-cert "
          name="certification"
          value=""
          placeholder="eg. The complete javaScript course 2022: from zero to hero.."
        ></textarea>
           
      </div>
   
      </div>
      <button type="button" class="txt-area-btn btnAddCertificaktion">
      Another Certification
    </button>
</div>
   
<div class="btn-box">
      <a href="#cvandresume-area" class="btn-span smoothmove" id="back1">back</a>
      <a href="#cvandresume-area" class="btn-span smoothmove" id="next2">next</a>
    </div>
    </div>



  <div class="form-style hiddenClass" id="s3">
     <div class="section-header">
        <h2>Work Experience</h2>
      </div>

  <div class="all-experiences-container" style="width:100%;">    
  <div class="all-experiences">
${
  editExpr
    ? data.experiences
        .map((exp, i) => {
          return `
<!--single her-->  
  
<form class="input-container single-experiences">

<h3 style="background-color: #eaeaeb;width: 90%;margin-top:20px;padding: 5px;">${
            i + 1
          } of ${data.experiences.length} work experiences</h3>

  <div class="multi-line-input">
  <div class="inputBox">
    <label for="jobTitle">Job title</label>
    <input
      type="text"
      class="inputTypeText exInput"
      name="jobTitle"
      value="${exp?.jobTitle}"
      placeholder="eg. Internet marketter"
    />
  </div>
  <div class="inputBox">
    <label for="orgAddress">Organization / Employer</label>
    <input
      class="inputTypeText exInput"
      name="orgAddress"
      value="${exp?.orgAddress}"
      placeholder="Enter organization name only"
    />
  </div>
 </div>
  <div class="multi-line-input">
  <div class="inputBox">
  <label for="orgCity">City</label>
  <input
    class="inputTypeText exInput"
    name="orgCity"
    value="${exp?.orgCity ? exp.orgCity : ""}"
    placeholder="eg. Los Angeles.."
  />
</div> 
  <div class="inputBox">
      <label for="orgState">State</label>
      <input
        type="text"
        class="inputTypeText exInput"
        name="orgState"
        value="${exp?.orgState ? exp.orgState : ""}"
        placeholder="eg. Califonia"
      />
    </div>
   
   </div>


<div class="exp-container">
  <div class="inputBox all-exp">
    <label for="experience" style="color:black; font-weight:500;">Job Duties / Responsibilities</label>
    ${
      Array.isArray(exp?.experience)
        ? `
    ${
      exp?.experience !== 0 &&
      exp?.experience
        .map((duty, i) => {
          return `
      <textarea
      rows="2"
      class="duty-box exInput edited-experience"
      name="experience"
      value=""
      maxlength="230"
      placeholder="eg. I started off as an intern where I mostly wrote and scheduled social media posts.."
    >${duty}</textarea>
      
    `;
        })
        .join("")
    }
    `
        : `<textarea
    rows="2"
    class="duty-box exInput edited-experience"
    name="experience"
    value=""
    maxlength="230"
    placeholder="eg. I started off as an intern where I mostly wrote and scheduled social media posts.."
  >${exp?.experience}</textarea>`
    }
    
    <textarea
      rows="2"
      class="duty-box exInput hiddenExperience ${onEdit ? "hiddenClass" : ""}"
      name="experience"
      value=""
      maxlength="230"
      placeholder="eg. I started off as an intern where I mostly wrote and scheduled social media posts.."
    ></textarea>
  
    </div>
    <button type="button"  class="txt-area-btn btnDuty">
    Add Another Duty
  </button>
  </div>
 
  <div class="date">    
    <div class="start">
      <label for="startDate">Start date </label>
      <input
        type="date"
        class="startDate exInput"
        name="experiencestarts"
        value="${exp?.experiencestarts}"
      />
    </div>
      <div class="end">
      <label for="endDate">End date </label>
      <input
        type="date"
        class="endDate exInput"
        name="experienceends"
        value="${exp?.experienceends}"
      />
    </div>
   </div>
   <hr style="margin-bottom:16px" />

</form>      
      `;
        })
        .join("")
    : ""
}
  
  
      <form class="input-container single-experiences hiddenExperiences ${
        editExpr ? "hiddenClass" : ""
      }">
      <div class="multi-line-input">
          <div class="inputBox">
          <label for="jobTitle">Job title</label>
          <input
            type="text"
            class="inputTypeText exInput"
            name="jobTitle"
            value=""
            placeholder="eg. Internet marketter"
          />
        </div>
      
        <div class="inputBox">
          <label for="orgAddress">Organization / Employer</label>
          <input
            
            class="inputTypeText exInput"
            name="orgAddress"
            value=""
            placeholder="Enter organization name only"
          />
        </div>
       </div>

        <div class="multi-line-input">
         
          <div class="inputBox">
            <label for="orgCity">City</label>
            <input
            class="inputTypeText exInput"
              name="orgCity"
              value=""
              placeholder="eg. Los Angeles.."
            />
          </div>
          <div class="inputBox">
          <label for="orgState">State</label>
          <input
            type="text"
            class="inputTypeText exInput"
            name="orgState"
            value=""
            placeholder="eg. Califonia"
          />
        </div>
         </div>
       <div class="exp-container">
        <div class="inputBox all-exp">
          <label for="experience">Job Duties / Responsibilities</label>
          <textarea
            rows="2"
            class="duty-box exInput"
            name="experience"
            value=""
            maxlength="230"
            placeholder="eg. I started off as an intern where I mostly wrote and scheduled social media posts.."
          ></textarea>
          </div>

          <button type="button"  class="txt-area-btn btnDuty">
          Add Another Duty
        </button>
        </div>
       <div class="date">
          <div class="start">
            <label for="startDate">Start date </label>
            <input
              type="date"
              class="startDate exInput"
              name="experiencestarts"
              value=""
            />
          </div>
          <div class="end">
            <label for="endDate">End date </label>
            <input
              type="date"
              class="endDate exInput"
              name="experienceends"
              value=""
            />
          </div>
        </div>
        <hr style="margin-bottom:16px" />

        </form>
        </div>
        </div>        
        <div class="inputBox" style="align-items:center;justify-contents:center;padding:10px;">
        <button type="button"  class="txt-area-btn btnWorkExperience" style="margin-top:0;align-self: center;">
        Add Work Experience
        </button>
        </div>
        
        
        <div class="btn-box">
        <a href="#cvandresume-area" class="btn-span smoothmove" id="back2">back</a>
        <a href="#cvandresume-area" class="btn-span smoothmove" id="next3">next</a>
        </div>
        
      
     
      </div>
      <form class="form-style hiddenClass" id="s4">
        


      <div class="section-header">
        <h2>Social Media Links</h2>
      </div>
      <div class="input-container">
        <input
          type="text"
          class="inputTypeText"
          name="facebook"
          value="${onEdit ? data.facebook : ""}"
          placeholder="Facebook"
        />

        <input
          type="text"
          class="inputTypeText"
          name="instagram"
          value="${onEdit ? data.instagram : ""}"
          placeholder="Instagram"
        />

        <input
          type="text"
          class="inputTypeText"
          name="linkedin"
          value="${onEdit ? data.linkedin : ""}"
          placeholder="LinkedIn"
        />

        <input
          type="text"
          class="inputTypeText"
          name="twitter"
          value="${onEdit ? data.twitter : ""}"
          placeholder="Twitter"
        />
    
      </div>

     
      <div class="btn-box">
        <a href="#cvandresume-area" class="btn-span smoothmove" id="back3">back</a>
        <a href="#cvandresume-area" class="btn-span smoothmove" id="next4">next</a>
      </div>
      </form>
    <div class="form-style hiddenClass" id="s5">
      <div class="section-header">
        <h2>Summary and others</h2>
      </div>

      <div class="input-container">
        
      <div class="inputBox">
          <label for="profile">Profile</label>
          
            <textarea
              name="profile"
              value="${onEdit ? data.profile : ""}"
              id="profile"
              
              rows="4"
              placeholder="Efficient IT Project Management Professional with 5+ years of experience and strong vendor management skills. Seeking to improve cost, quality, and time at McBain-Bessey..."
            >${onEdit ? data.profile : ""}</textarea>
          
        </div>
        
        
        <div class="skills-container">
        <div class="inputBox all-skills">
      
        <label for="skill" >Skills</label>
           ${
             editSkills
               ? data.skills
                   .map((skill) => {
                     return `
            <input
            type="text"
            name="skill"
            value="${skill}"
            class="inputTypeText skillInput"
            placeholder="skill"
          />
            `;
                   })
                   .join("")
               : ""
           }
           <input
           type="text"
           name="skill"
           value=""
           class="inputTypeText skillInput ${editSkills ? "hiddenClass" : ""}"
           placeholder="skill"
         />
         </div>
          <button type="button" class="txt-area-btn addskill">
            Another Skill
          </button>
        </div>
      
        <div class="interest-container">
        <div class="inputBox all-interest">
   
        <label for="interest" >Interest</label>
           ${
             editIntr
               ? data.interest
                   .map((intr) => {
                     return `
             <input
             type="text"
             name="interest"
             value="${intr}"
             class="inputTypeText intInput single-interest"
             placeholder="interest or hobby"
           />   
             `;
                   })
                   .join("")
               : ""
           }
           <input
           type="text"
           name="interest"
           value=""
           class="inputTypeText single-interest intInput ${
             editIntr ? "hiddenClass" : ""
           }"
           placeholder="interest or hobby"
         />   
         </div>
          <button type="button" class="txt-area-btn addinterest">
            Add Interest
          </button>
        </div>
   
        <div class="languages-container">
        <div class="all-languages">
   
        ${
          editLang
            ? data.languages
                .map((lang) => {
                  return `
          <form class="multi-line-input single-lang">
          <div class="inputBox">
            <label for="languag">Language</label>
            <input
              type="text"
              class="inputTypeText langInputs"
              name="language"
              value="${lang.language}"
              placeholder="eg. English"
            />
          </div>

          <div class="inputBox">
            <label for="langLevel">Level</label>
            <select
              
              class="inputTypeText langInputs langLevel"
              name="langLevel"
              value="${lang.level}"
              id="langLevel"
                                      >
                                      
            <option value="30%">Beginer</option>
            <option value="60%">Intermediate</option>
            <option value="100%">Proficient</option>
            </select>

          </div>
      
                      
          </form>     
          `;
                })
                .join("")
            : ""
        }
         
        <form class="multi-line-input single-lang ${
          editLang ? "hiddenClass" : ""
        }">

        <div class="inputBox">
          <label for="languag">Language</label>
          <input
            type="text"
            class="inputTypeText langInputs"
            name="language"
            value=""
            placeholder="eg. English"
          />
        </div>
        <div class="inputBox">
          <label for="langLevel">Level</label>
          <select
            
            class="inputTypeText langInputs langLevel"
            name="langLevel"
            value="30%"
            id="langLevel"
                                    >
          <option value="30%">Beginer</option>
          <option value="60%">Intermediate</option>
          <option value="100%">Proficient</option>
          </select>

        </div>
      
                    
        </form>     
        </div>     

         
          <button type="button" class="txt-area-btn btnAddLanguage">
            Add Language
          </button>
          </div>     

       <div class="reff-container">
        <div class="all-reff">
          <h2>Refrence</h2>
          ${
            editReff
              ? data.reffrences
                  .map((ref, i) => {
                    return `
            <form class="inputBox single-reff">
 <h3   background-color: #eaeaeb;
 width: 90%; style="padding: 5px;">${i + 1} of ${
                      data.reffrences.length
                    } Reffrences</h3>

            <input
            type="text"
            name="refrenceName"
            value="${ref.refrenceName}"
            class="inputTypeText refInputs"
            placeholder="Reference name"
          />
          <input
            type="text"
            name="referenceTitleAndOrg"
            value="${ref.referenceTitleAndOrg}"
            class="inputTypeText refInputs"
            placeholder="title and organization"
          />
          <input
            type="text"
            name="refrenceEmail"
            value="${ref.refrenceEmail}"
            class="inputTypeText refInputs"
            placeholder="email address"
          />
          <hr style="margin-bottom:16px;" />
          </form>  
          `;
                  })
                  .join("")
              : ""
          }
          <form class="inputBox single-reff ${editReff ? `hiddenClass` : ""}">
          <input
          type="text"
            name="refrenceName"
            value=""
            class="inputTypeText refInputs"
            placeholder="Reference name"
          />
          <input
            type="text"
            name="referenceTitleAndOrg"
            value=""
            class="inputTypeText refInputs"
            placeholder="title and organization"
          />
          <input
            type="text"
            name="refrenceEmail"
            value=""
            class="inputTypeText refInputs"
            placeholder="email address"
            />
            <hr style="margin-bottom:16px;" />


            </form>
        </div>     

          <button type="button" class="txt-area-btn addrefrence">
            Another Refrence
          </button>
        </div>
      
      <div class="btn-box">
        <a href="#cvandresume-area" class="btn-span smoothmove" id="back4">back</a>
        <span class="btn-span" id="next5" 
          >save</span>
      </div>
      
    </form>
    <div class="step-row">
      <div id="progress"></div>
      <div class="step-coll"><small></small></div>
      <div class="step-coll"><small></small></div>
      <div class="step-coll"><small></small></div>
      <div class="step-coll"><small></small></div>
      <div class="step-coll"><small></small></div>
      <div class="step-coll"><small></small></div>
    </div>
  </div>
`;
};
export const leterformcontainer = function (onEdit, data, noPassport) {
  return `

 <button type="button" class="btnCloseView closeForm">
   <i
     type="icon"
     class="fa fa-times icon-mobile-nav"
     aria-hidden="true"
   ></i>
 </button>
 <div id="letterForm" autocomplete="off">
   <div class="cover-letter-user-employer" id="cover-letter-form">
     <div class="cover-employer-information">
       <div class="section-header">
         <h2>Employer Data</h2>
       </div>

       <div class="input-container">
         <input
           type="text"
           class="inputTypeText fullName"
           name="receipient"
           value="${onEdit ? data.receipient : ""}"
           placeholder="receipient"
         />
         <input
           type="text"
           class="inputTypeText"
           name="compenyname"
           value="${onEdit ? data.compenyname : ""}"
           placeholder="Enter compey name"
         />
         <input
           type="text"
           class="inputTypeText"
           name="city"
           value="${onEdit ? data.city : ""}"
           placeholder="Enter city"
         />
         <input
           type="text"
           class="inputTypeText"
           name="streetaddress"
           value="${onEdit ? data.streetaddress : ""}"
           placeholder="Enter street address"
         />
         <input
           type="text"
           class="inputTypeText"
           name="state"
           value="${onEdit ? data.state : ""}"
           placeholder="Enter state"
         />
       </div>
     </div>

     <div class="cover-personal-information">
       <div class="section-header">
         <h2>Personal Data</h2>
       </div>

       <div class="input-container">
         <input
           type="text"
           class="inputTypeText fullName"
           name="fullName"
           value="${onEdit ? data.fullName : ""}"
           placeholder="Full name"
         />
         <input
           type="text"
           class="inputTypeText"
           name="profession"
           value="${onEdit ? data.profession : ""}"
           placeholder="Enter profession"
         />
         <input
           type="text"
           class="inputTypeText"
           name="phoneNumber"
           value="${onEdit ? data.phoneNumber : ""}"
           placeholder="Enter phone Number"
         />
         <input
           type="text"
           class="inputTypeText"
           name="address"
           value="${onEdit ? data.address : ""}"
           placeholder="Enter address"
         />
         <input
           type="email"
           class="inputTypeText"
           name="email"
           value="${onEdit ? data.email : ""}"
           placeholder="Enter email"
         />
       </div>
     </div>
   </div>

   <div class="letterContainer" id="showtheletter">
   ${
     noPassport
       ? ""
       : `<div class="image-container">
       <div class="display_image2" ${
         onEdit &&
         `${
           data.images ? `style=background-image:url(${data.images.url})` : ""
         }`
       }
        ></div>
        <span class="image-input" >Choose Image</span>
       
      
     </div>`
   }
     <div contenteditable="true" name="theletter" id="theletter">
     ${
       onEdit
         ? data.theletter.replaceAll("\n", "<br />")
         : `
     Dear [Ms.] [Miss] [Mr.] [Dr.] [Last Name],<br /><br />
     I am writing today in application to the [Target Job Title] position
     with [Target Company Name]. I am confident that my [Skill 1] and
     [Skill 2], as well as my experience in [Industry] make me an
     excellent fit for this position.<br /><br />
     As my attached resume outlines, I have [Number] years of experience
     working in the [Industry] field. I have achieved [accomplishment],
     with [describe results], and I am confident I can achieve similar
     results for [Target Company Name]. I am [Quality 1] and [Quality 2],
     attributes I know are important to your organization. I am looking
     for an opportunity to [outline goal], and develop [Skill 3] and
     [Skill 4], while offering expertise in [Skill 5].<br /><br />
     I greatly appreciate you taking the time to consider my application.
     I look forward to the opportunity to speak with you further
     regarding how I can contribute to the continued success of [Target
      Company Name]. Thank you again.<br /><br />
      Regards, <br />
      [First Name] [Last Name] <br />
      [Phone Number]<br />
      [Email Address]
      <br /><br />
      `
     }
      </div>
   </div>
 </div>

 <div class="btn-box">
   <span class="btn-span btn-save-letter" >Save</span>
 </div>


 `;
};

export const anotherSkill = function () {
  return `
  <input
  type="text"
  name="skill"
  value=""
  class="inputTypeText skillInput"
  placeholder="skill"
/>
  `;
};
export const anotherReff = function () {
  return `

  <form class="inputBox single-reff">
  <input
  type="text"
    name="refrenceName"
    value=""
    class="inputTypeText refInputs"
    placeholder="Reference name"
  />
  <input
    type="text"
    name="referenceTitleAndOrg"
    value=""
    class="inputTypeText refInputs"
    placeholder="title and organization"
  />
  <input
    type="text"
    name="refrenceEmail"
    value=""
    class="inputTypeText refInputs"
    placeholder="email address"
    />
    </form>
    <hr style="margin-bottom:16px;" />

</div>     

  `;
};
export const anotherInterest = function () {
  return `
  <input
  type="text"
  name="interest"
  value=""
  class="inputTypeText single-interest intInput"
  placeholder="interest or hobby"
/>   
  `;
};
export const anotherCertification = function () {
  return `
  <div class="inputBox single-cert">
  <textarea
    rows="2"
    class="certInput new-cert"
    name="certification"
    value=""
    placeholder="eg. The complete javaScript course 2022: from zero to hero.."
  ></textarea>
  

</div>
  `;
};
export const anotherEdu = function () {
  return `
  <form class="input-container single-edu">
      
  <div class="inputBox">
      <label for="qualification">Qualification</label>
      <input
        type="text"
        class="inputTypeText eduInputs"
        name="qualification"
        value=""
        placeholder="eg. BSC in Mathematics"
      />
    </div>
  
    <div class="inputBox">
      <label for="eduAndAddress">School and address</label>
      <textarea
        rows="2"
        name="eduAndAddress"
        class="eduInputs"
        value=""
        placeholder="eg. University of Derby (UK) England..."
      ></textarea>
    </div>
  
    <div class="date">
      <div class="start">
        <label for="startDate">Start date </label>
        <input
          type="date"
          class="startDate eduInputs"
          name="educationstarts"
          value=""
        />
      </div>
        <div class="end">
        <label for="endDate">End date </label>
        <input
          type="date"
          class="endDate eduInputs"
          name="educationends"
          value=""
        />
      </div>
      </div>
      <hr style="margin-bottom:16px" />
   
      </form>
  
  `;
};
export const anotherExperiences = function () {
  return `
  <form class="input-container single-experiences">
     
  <div class="multi-line-input">
          <div class="inputBox">
          <label for="jobTitle">Job title</label>
          <input
            type="text"
            class="inputTypeText exInput"
            name="jobTitle"
            value=""
            placeholder="eg. Internet marketter"
          />
        </div>
      
        <div class="inputBox">
          <label for="orgAddress">Organization / Employer</label>
          <input
            
            class="inputTypeText exInput"
            name="orgAddress"
            value=""
            placeholder="Enter organization name only"
          />
        </div>
       </div>

        <div class="multi-line-input">
          <div class="inputBox">
            <label for="orgState">State</label>
            <input
              type="text"
              class="inputTypeText exInput"
              name="orgState"
              value=""
              placeholder="eg. Califonia"
            />
          </div>
          <div class="inputBox">
            <label for="orgCity">City</label>
            <input
            class="inputTypeText exInput"
              name="orgCity"
              value=""
              placeholder="eg. Los Angeles.."
            />
          </div>
         </div>
       <div class="exp-container">
        <div class="inputBox all-exp">
          <label for="experience">Job Duties / Responsibilities</label>
          <textarea
            rows="2"
            class="duty-box exInput"
            name="experience"
            value=""
            maxlength="230"
            placeholder="eg. I started off as an intern where I mostly wrote and scheduled social media posts.."
          ></textarea>
          </div>

          <button type="button"  class="txt-area-btn btnDuty">
          Add Another Duty
        </button>
        </div>
       <div class="date">
          <div class="start">
            <label for="startDate">Start date </label>
            <input
              type="date"
              class="startDate exInput"
              name="experiencestarts"
              value=""
            />
          </div>
          <div class="end">
            <label for="endDate">End date </label>
            <input
              type="date"
              class="endDate exInput"
              name="experienceends"
              value=""
            />
          </div>
        </div>
       
        </form>
   `;
};
export const anotherLang = function () {
  return `

  <form class="multi-line-input single-lang">

  <div class="inputBox">
    <label for="languag">Language</label>
    <input
      type="text"
      class="inputTypeText langInputs"
      name="language"
      value=""
      placeholder="eg. English"
    />
  </div>

  <div class="inputBox">
    <label for="langLevel">Level</label>
    <select
      
      class="inputTypeText langInputs langLevel"
      name="langLevel"
      value="30%"
      id="langLevel"
                              >
    <option value="30%">Beginer</option>
    <option value="60%">Intermediate</option>
    <option value="100%">Proficient</option>
    </select>

  </div>
              
  </form>     

  `;
};
export const anotherXp = function () {
  return `
  
  <textarea
  rows="2"
  class="duty-box exInput "
  name="experience"
  value=""
  maxlength="230"
  placeholder="eg. I started off as an intern where I mostly wrote and scheduled social media posts.."
></textarea>

  `;
};
