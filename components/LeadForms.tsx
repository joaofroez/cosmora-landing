// components/LeadForm.tsx
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Schema de validação
const formSchema = z.object({
    name: z.string().min(2, "Nome muito curto").regex(/^[A-Za-zÀ-ÿ\s]+$/, "O nome deve conter apenas letras"),
    email: z.string().email("Email inválido"),
    phone: z.string().min(11, "Celular inválido").regex(/^[0-9]+$/, "O telefone deve conter apenas números"),

    terms: z
        .boolean()
        .refine(val => val === true, {
            message: "Você deve aceitar os termos",
        }),
});

type FormData = z.infer<typeof formSchema>;

export function LeadForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    async function onSubmit(data: FormData) {
        // Aqui você chamará a Server Action
        console.log(data);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulação
        alert("Enviado com sucesso!");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md min-h-[500px] border border-gray-100">
            <div className="space-y-4">
                <div>
                    <label className="text-sm text-gray-600">Nome:</label>
                    <input {...register("name")} className="w-full border p-3 rounded-lg placeholder-gray-500" placeholder="Seu nome" />
                    {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                </div>
                <div>
                    <label className="text-sm text-gray-600">E-mail:</label>
                    <input {...register("email")} className="w-full border p-3 rounded-lg placeholder-gray-500" placeholder="Seu e-mail" />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                </div>
                <div>
                    <label className="text-sm text-gray-600">Telefone:</label>
                    <input {...register("phone")} className="w-full border p-3 rounded-lg placeholder-gray-500" placeholder="Seu telefone" />
                    {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                </div>



                <div className="flex items-start gap-2">
                    <input type="checkbox" {...register("terms")} className="mt-1" />
                    <span className="text-xs text-gray-500">Tenho mais de 18 anos e aceito receber contato...</span>
                    {errors.terms && <span className="text-red-500 text-xs">{errors.terms.message}</span>}
                </div>


                <button
                    disabled={isSubmitting}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-50"
                >
                    {isSubmitting ? "Enviando..." : "Entrar em contato"}
                </button>
            </div>
        </form>
    );
}