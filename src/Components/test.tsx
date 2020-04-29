// import * as React from "react";
// // import { Form } from "./Form";
// // import { Field } from "./Field";

// export const ContactUsForm: React.SFC = () => {
//   return (
//     <Form
//       action="http://localhost:4351/api/contactus"
//       render={() => (
//         <React.Fragment>
//           <div className="alert alert-info" role="alert">
//             Enter the information below and we'll get back to you as soon as we
//             can.
//           </div>
//           <Field id="name" label="Name" />
//           <Field id="email" label="Email" />
//           <Field
//             id="reason"
//             label="Reason"
//             editor="dropdown"
//             options={["", "Marketing", "Support", "Feedback", "Jobs"]}
//           />
//           <Field id="notes" label="Notes" editor="multilinetextbox" />
//         </React.Fragment>
//       )}
//     />
//   );
// };

// interface IFormProps {
//     /* The http path that the form will be posted to */
//     action: string;
  
//     /* A prop which allows content to be injected */
//     render: () => React.ReactNode;
//   }

  




// type Editor = "textbox" | "multilinetextbox" | "dropdown";

//  interface IFieldProps {
//   /* The unique field name */
//   id: string;

//   /* The label text for the field */
//   label?: string;

//   /* The editor for the field */
//   editor?: Editor;

//   /* The drop down items for the field */
//   options?: string[];

//   /* The field value */
//   value?: any;
// }



//  const Field: React.SFC<IFieldProps> = ({
//   id,
//   label,
//   editor,
//   options,
//   value
// }) => {
//   return (
//     <div className="form-group">
//       {label && <label htmlFor={id}>{label}</label>}

//       {editor!.toLowerCase() === "textbox" && (
//         <input
//           id={id}
//           type="text"
//           value={value}
//           onChange={
//             (e: React.FormEvent<HTMLInputElement>) =>
//               console.log(e) /* TODO: push change to form values */
//           }
//           onBlur={
//             (e: React.FormEvent<HTMLInputElement>) =>
//               console.log(e) /* TODO: validate field value */
//           }
//           className="form-control"
//         />
//       )}

//       {editor!.toLowerCase() === "multilinetextbox" && (
//         <textarea
//           id={id}
//           value={value}
//           onChange={
//             (e: React.FormEvent<HTMLTextAreaElement>) =>
//               console.log(e) /* TODO: push change to form values */
//           }
//           onBlur={
//             (e: React.FormEvent<HTMLTextAreaElement>) =>
//               console.log(e) /* TODO: validate field value */
//           }
//           className="form-control"
//         />
//       )}

//       {editor!.toLowerCase() === "dropdown" && (
//         <select
//           id={id}
//           name={id}
//           value={value}
//           onChange={
//             (e: React.FormEvent<HTMLSelectElement>) =>
//               console.log(e) /* TODO: push change to form values */
//           }
//           onBlur={
//             (e: React.FormEvent<HTMLSelectElement>) =>
//               console.log(e) /* TODO: validate field value */
//           }
//           className="form-control"
//         >
//           {options &&
//             options.map(option => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//         </select>
//       )}

//       {/* TODO - display validation error */}
//     </div>
//   );
// };
// Field.defaultProps = {
//   editor: "textbox"
// };






// // import * as React from "react";

// interface IFormProps {
//   /* The http path that the form will be posted to */
//   action: string;
// }

// export interface IValues {
//   /* Key value pairs for all the field values with key being the field name */
//   [key: string]: any;
// }

// export interface IErrors {
//   /* The validation error messages for each field (key is the field name */
//   [key: string]: string;
// }

// export interface IFormState {
//   /* The field values */
//   values: IValues;

//   /* The field validation error messages */
//   errors: IErrors;

//   /* Whether the form has been successfully submitted */
//   submitSuccess?: boolean;
// }

//  class Form extends React.Component<IFormProps, IFormState> {
//   constructor(props: IFormProps) {
//     super(props);

//     const errors: IErrors = {};
//     const values: IValues = {};
//     this.state = {
//       errors,
//       values
//     };
//   }

//   /**
//    * Returns whether there are any errors in the errors object that is passed in
//    * @param {IErrors} errors - The field errors
//    */
//   private haveErrors(errors: IErrors) {
//     let haveError: boolean = false;
//     Object.keys(errors).map((key: string) => {
//       if (errors[key].length > 0) {
//         haveError = true;
//       }
//     });
//     return haveError;
//   }

//   /**
//    * Handles form submission
//    * @param {React.FormEvent<HTMLFormElement>} e - The form event
//    */
//   private handleSubmit = async (
//     e: React.FormEvent<HTMLFormElement>
//   ): Promise<void> => {
//     e.preventDefault();

//     if (this.validateForm()) {
//       const submitSuccess: boolean = await this.submitForm();
//       this.setState({ submitSuccess });
//     }
//   };

//   /**
//    * Executes the validation rules for all the fields on the form and sets the error state
//    * @returns {boolean} - Whether the form is valid or not
//    */
//   private validateForm(): boolean {
//     // TODO - validate form
//     return true;
//   }

//   /**
//    * Submits the form to the http api
//    * @returns {boolean} - Whether the form submission was successful or not
//    */
//   private async submitForm(): Promise<boolean> {
//     // TODO - submit the form
//     return true;
//   }

//   public render() {
//     const { submitSuccess, errors } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit} noValidate={true}>
//         <div className="container">
//           {/* TODO - render fields */}
//           <div className="form-group">
//             <button
//               type="submit"
//               className="btn btn-primary"
//               disabled={this.haveErrors(errors)}
//             >
//               Submit
//             </button>
//           </div>
//           {submitSuccess && (
//             <div className="alert alert-info" role="alert">
//               The form was successfully submitted!
//             </div>
//           )}
//           {submitSuccess === false &&
//             !this.haveErrors(errors) && (
//               <div className="alert alert-danger" role="alert">
//                 Sorry, an unexpected error has occurred
//               </div>
//             )}
//           {submitSuccess === false &&
//             this.haveErrors(errors) && (
//               <div className="alert alert-danger" role="alert">
//                 Sorry, the form is invalid. Please review, adjust and try again
//               </div>
//             )}
//         </div>
//       </form>
//     );
//   }
// }










import * as React from "react";


type ThemeContextType = {
  theme: string;
  setTheme: (value: string) => void;
};
const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState("white");

  React.useEffect(() => {
    // We'd get the theme from a web API / local storage in a real app
    // We've hardcoded the theme in our example
    const currentTheme = "lightblue";
    setTheme(currentTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header/>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

class Header extends React.Component {
  static contextType = ThemeContext;
  context: React.ContextType< React.Context<ThemeContextType | undefined>>;

  render() {
    const { theme, setTheme } = this.context!;

    return (
      <div style={{ backgroundColor: theme }}>
        <select value={theme} onChange={e => setTheme(e.currentTarget.value)}>
          <option value="white">White</option>
          <option value="lightblue">Blue</option>
          <option value="lightgreen">Green</option>
        </select>
        <span>Hello!</span>
      </div>
    );
  }
}

//export default Header;
