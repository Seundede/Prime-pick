"use client";
import React from "react";
import Modal from "@/components/ui/modal";
import { useStore } from "@/hooks/use-store";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(1),
});
const StoreModal = () => {
  const store = useStore();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Modal
      isOpen={store.isOpen}
      description="text"
      title="title"
      onClose={store.onClose}
    >
      Future store
    </Modal>
  );
};

export default StoreModal;
