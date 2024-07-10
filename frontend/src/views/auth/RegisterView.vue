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


            <FormKit type="submit">Crear Cuenta</FormKit>
    </FormKit>
</template>
