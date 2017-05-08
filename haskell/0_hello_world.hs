f :: Num a => a -> a -> a
f x y = x + x * y
main = do
  let g = \y -> (f 3 y)
  print (g 4)