<template>
  <div class="hasher bg-white p-8 rounded-xl">
    <UForm :state="form" :schema="schema" class="space-y-4" @submit="onSubmit">
      <h1 class="text-xl font-bold">Bcrypt Hash Algorithm</h1>
      <UFormGroup label="Plain Text" name="value" required>
        <UTextarea v-model="form.value" placeholder="Input text here..." />
      </UFormGroup>
      <UFormGroup label="Cost Factor" name="cost" required>
        <USelectMenu
          v-model="form.cost"
          :options="costOptions"
          value-attribute="value"
          label-attribute="label"
          placeholder="Select cost here..."
        />
      </UFormGroup>
      <UFormGroup label="The Result" name="result">
        <UTextarea v-model="form.result" readonly />
      </UFormGroup>
      <div class="flex items-center justify-end gap-2 pt-4">
        <UButton type="submit" :loading="loading.submit">Generate Hash</UButton>
        <UButton
          type="reset"
          color="black"
          variant="outline"
          :disabled="loading.submit"
          >Reset Form</UButton
        >
      </div>
    </UForm>
  </div>
</template>
<script lang="ts" setup>
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

definePageMeta({
  layout: 'hasher',
})

const schema = z.object({
  value: z.string().nonempty('Please input a text to hash.'),
  cost: z.string().nonempty('Please select a cost factor.'),
  result: z.string().optional(),
})

type Schema = z.output<typeof schema>

const form = reactive<Schema>({
  value: '',
  cost: '16',
  result: '',
})

const loading = reactive({
  submit: false,
})

const costOptions = [
  {
    label: '4',
    value: '4',
  },
  {
    label: '5',
    value: '5',
  },
  {
    label: '6',
    value: '6',
  },
  {
    label: '7',
    value: '7',
  },
  {
    label: '8',
    value: '8',
  },
  {
    label: '9',
    value: '9',
  },
  {
    label: '10',
    value: '10',
  },
  {
    label: '11',
    value: '11',
  },
  {
    label: '12',
    value: '12',
  },
  {
    label: '13',
    value: '13',
  },
  {
    label: '14',
    value: '14',
  },
  {
    label: '15',
    value: '15',
  },
  {
    label: '16',
    value: '16',
  },
  {
    label: '17',
    value: '17',
  },
  {
    label: '18',
    value: '18',
  },
  {
    label: '19',
    value: '19',
  },
]

async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.submit = true
  const body = {
    value: event.data.value,
    cost: Number(event.data.cost),
  }
  const res = await $fetch('/api/hasher/bcrypt', {
    method: 'post',
    body: JSON.stringify(body),
  })
  if (res) {
    form.result = res
  }
  loading.submit = false
}
</script>
<style lang="css" scoped>
.hasher {
  box-shadow: 0px 0px 30px 0px #e9e9e9;
}
</style>
