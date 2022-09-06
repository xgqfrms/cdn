;; msimple.wat => msimple.wasm
;; msimple.wast => msimple.wasm
;; 使用 s-expr, 手动组装 WebAssembly Module
(module
  (func $getYear (import "imports" "getYear") (param i32))
  (func (export "printYear")
    ;; 写死 const
    i32.const 2022
    call $getYear
  )
)
