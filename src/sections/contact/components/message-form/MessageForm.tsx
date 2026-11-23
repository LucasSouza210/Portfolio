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
        <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-fit h-fit flex flex-col items-center gap-5 sm:gap-6 md:gap-7 lg:gap-4 xl:gap-5 2xl:gap-6 p-6 sm:p-7 md:p-8 lg:p-5 xl:p-6 2xl:p-7 border rounded-3xl sm:rounded-[28px] md:rounded-4xl lg:rounded-[20px] xl:rounded-[23px] 2xl:rounded-[26px] bg-default border-default">
            <FieldsContainer register={register} errors={errors} />
            <Submit />
        </form>
    )
}