import { useForm, type SubmitHandler } from "react-hook-form"
import FieldsContainer from "./components/fields-container/FieldsContainer"
import Submit from "./components/Submit"

export type ContactFormData = {
    name: string
    email: string
    message: string
}

export default function MessageForm() {

    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
        mode: "onSubmit",
        reValidateMode: "onChange",
    })

    const onSubmit: SubmitHandler<ContactFormData> = async () => {

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center gap-5 sm:gap-6 md:gap-7 lg:gap-4 xl:gap-5 2xl:gap-6 p-6 border rounded-3xl bg-default border-default">
            <FieldsContainer register={register} errors={errors} />
            <Submit />
        </form>
    )
}