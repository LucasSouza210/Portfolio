import type { FieldErrors, UseFormRegister } from "react-hook-form"
import { contactFields } from "../../../../../../utils/constants";
import type { ContactFormData } from "../../MessageForm";
import FormField from "./components/form-field/FormField";

interface FieldsContainerProps {
    register: UseFormRegister<ContactFormData>
    errors: FieldErrors<ContactFormData>
}

export default function FieldsContainer({ register, errors }: FieldsContainerProps) {
    return (
        <div className="w-full flex flex-col gap-4 sm:gap-4.5 md:gap-5 lg:gap-3 xl:gap-3.5 2xl:gap-4">
            {
                contactFields.map((field) => (
                    <FormField
                        key={field.name}
                        title={field.title}
                        placeholder={field.placeholder}
                        maxLength={field.maxLength}
                        textarea={field.textarea}
                        error={errors[field.name]}
                        {...register(field.name, field.rules)}
                    />
                ))
            }
        </div>
    )
}