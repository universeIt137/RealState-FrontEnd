import Swal from "sweetalert2";


export async function statusAlert() {
    return Swal.fire({
        title: "Are you sure?",
        text: "You won't be able update this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, confirmed it!"
    })
}