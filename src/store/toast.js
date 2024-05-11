import { writable } from "svelte/store";

export const toasts = writable([]);

export const addToast = (email) => {
    // Create a unique ID so we can easily find/remove it
    // if it is dismissible/has a timeout.
    const id = Math.floor(Math.random() * 10000);

    // Setup some sensible defaults for a toast.
    const defaults = {
        id,
        toastType: "success",
        dismisableToast: true,
        toastTimeout: 3000,
    };

    // Push the toast to the top of the list of toasts
    toasts.update((all) => [{ ...defaults, ...email }, ...all]);

    // If toast is dismissible, dismiss it after "timeout" amount of time.
    if (email.toastTimeout) setTimeout(() => dismissToast(id), email.toastTimeout);
};

export const dismissToast = (id) => {
    toasts.update((all) => all.filter((t) => t.id !== id));
};
