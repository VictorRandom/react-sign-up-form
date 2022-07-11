import React, {useState} from "react"

export default function App() {
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */

    const [formData, setFormData] = useState(
      {
        email: "",
        password: "",
        confirmPassword: "",
        okayToEmail: false
      }
    )

    function handleChange(event){
      const { name, type, value, checked } = event.target
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          [name]: type == "checkbox" ? checked : value,
        }
      })      
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        
        if(formData.password == formData.confirmPassword){
          console.log('Successfully signed up');
        } else {
          console.log("Passwords to not match");
        }
        
        if(formData.okayToEmail){
          console.log("Thanks for signing up for our newsletter!")
        }

      }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    name="email"
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input 
                    name="password"
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input 
                    name="confirmPassword"
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    value={formData.confirmPassword}
                />
                
                <div className="form--marketing">
                    <input
                        name="okayToEmail"
                        id="okayToEmail"
                        type="checkbox"
                        onChange={handleChange}
                        value={formData.okayToEmail}                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
