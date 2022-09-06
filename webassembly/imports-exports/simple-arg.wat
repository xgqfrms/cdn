;; simple-arg.wat
;; local.get
(module
  (func $getYear (import "imports" "getYear") (param i32))
  (func (export "printYear") (param $year i32)
    (call $getYear(local.get $year))
  )
)
