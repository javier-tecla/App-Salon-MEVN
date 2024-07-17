<script setup>


</script>

<template>
        <h1 class="text-6xl font-extrabold text-white text-center mt-10">Olvide mi password</h1>
        <p class="text-2xl text-white text-center my-5">Recupera el acceso a tu cuenta</p>

        <FormKit
            id="loginForm"
            type="form"
            :actions="false"
            incomplete-message="No se pudo enviar, revisa las notificaciones"
            @submit="handleSubmit"
        > 
            <FormKit
                type="email"
                label="Email"
                name="email"
                placeholder="Email de Usuario"
                validation="required|email"
                :validation-messages="{
                    required: 'El Email es obligatorio',
                    email: 'Email no válido'
                }"
            />

            <FormKit type="submit">Enviar Instrucciones</FormKit>
           

        </FormKit>
</template>