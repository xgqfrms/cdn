
;; https://mbebenita.github.io/WasmExplorer/

(module
    (export "sqrt" (func $sqrt))
    (func $sqrt
        (param $num f32)
        (result f32)
        ;; (f32.sqrt (get_local $num))
        (f32.sqrt (local.get $num))
    )
)

