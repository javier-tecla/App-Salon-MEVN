<script setup>

</script>


<template>
    <h1 class="text-6xl font-extrabold text-white text-center mt-10">Crea una cuenta</h1>
    <p class="text-2xl text-white text-center my-5">Crea una cuenta en Appsalón</p>

    <FormKit
        type="form"
        :actions="false"
        incomplete-message="No se pudo enviar, revisa las notificaciones"
    >
        <FormKit
            type="text"
            label="Nombre"
            name="name"
            placeholder="Tu Nombre"
            validation="required|length:3"
            :validation-messages="{
                required: 'El Nombre es obligatorio',
                length: 'El nombre es muy corto'
            }"
        />

        <FormKit
            type="email"
            label="Email"
            name="email"
            placeholder="Email de Registro"
            validation="required|email"
            :validation-messages="{
                required: 'El Email es obligatorio',
                email: 'Email no válido'
            }"
        />

        <FormKit
            type="password"
            label="password"
            name="password"
            placeholder="Password de Usuario - Min 8 Caracteres"
            validation="required|length:8"
            :validation-messages="{
                required: 'El Password es obligatorio',
                length: 'El password debe contener al menos 8 caracteres'
            }"
        />

        <FormKit
            type="password"
            label="Repetir Password"
            name="password_confirm"
            placeholder="Repite el password"
            validation="required|confirm"
            :validation-messages="{
                required: 'El Password es obligatorio',
                confirm: 'Los passwords no son iguales'
            }"
        />


            <FormKit type="submit">Crear Cuenta</FormKit>
    </FormKit>
</template>
