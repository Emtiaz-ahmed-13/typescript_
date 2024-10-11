⚡ TypeScript: JavaScript with Superpowers ⚡
TypeScript is a superset of JavaScript that provides powerful features for building larger and more complex applications. It extends JavaScript by adding static typing and additional tools to help developers write cleaner, more reliable code. With TypeScript, you can enjoy all the flexibility of JavaScript while benefiting from better error detection, improved code readability, and enhanced tooling support.

                ✍️ Annotations

TypeScript allows you to specify type annotations for variables, function parameters, return values, and other expressions. These annotations ensure that values adhere to the expected data types, making it easier to catch errors early in the development process. By enforcing types, TypeScript helps developers write safer and more predictable code, making debugging and scaling applications much smoother.

                🔍 Type Inference

Type inference is a feature in TypeScript that allows the compiler to automatically determine the type of a variable based on its value. In other words, if you declare a variable without explicitly specifying its type, TypeScript will try to infer the type based on the value you assign to it.

                Any Type

Typescript has a special any type that can be used to represent any type.when a variable is annotated with the any type,Typescrpt will allow it to have any value and disable all type checking for that variable and its properties.

                Any Type(Warning)

while the any type can be useful in certeain situations,it should be used sparingly.overuse of any can lead to UNTYPED code and make it harder to catch type-related bugs during development.it's generally better to use more specific types whenever possible to get the benefits of typeScript's type checking.

                Function Parameters Annotations

Function pearameter annotations in typeScript are used to specify the expected stypes of the pearameters that a function taks.also notice,TypeScript will gives you warnning if you provides more or less arguments then you specify in your parameters area.

                    Default Params value




                    Void Function

Void is a type that represent the absence of any value. it is often used as the return tpye for functions that do not return a value.

                    Never

The never keyword is used to indicate that a funcion will not reutrn anything,or that a variable can never have a value. The never type is useful for indicating that certin values are impossible . it can help catch errors at compile-time instead of runtime. 1. A function that always throwas an error 2. A function that has an infinite loop 3. A variable that can never have a value

                    Array types

Array are a type of object that can store multiple values of the same data type. Array in Typescript are typed,which means you can specity the type of values that an array can hold.
1.Using the squeare bracket notation [] to indicate an array of a specify type
2.using the generic Array<type> notation to indicate an array of a specific type.

                  Multi-Dimensional

A multi-dimentional array is an array that contains other array as its elements.Multi-dimentional array can be defined using the same notation as one-dimensional array,but with nested squre brackets.

                Objects

An object in TypeScript is a Structed data type that represents a collection of properties, each with a key and an associated value.The properties of an object can have specific types, and the object itself can be annotated with a type,often defined using an interface or a type alias.TypeScript uses structural typing,meaning that the shape of an object(its structure or properties) is what matters for type compatibility.

                Type Aliases

A type alias is a way to create a new name for an existing type.it allows you to define CUSTOM type that refers to another type and give it a more meaningful or descriptive name.
type aliases are defined using the type keyword followed by the alias,and equal sign(=) and the type it refers to.

                Optional Properties

You can make a certin property optional in an object types by adding a question marks(?) after theproperty name.
For example,lets say you have an object type for person with name,age and email properties but you want to make the email properties optional.You can do this by adding a question mark after the email property.

                Intersection Type

An intersection type is a way to combine multiple type into a single type that includes all the properties and methods of each consituent type.An interesection type is denoted by the the & symbol.

                Unions

Unions are used to declare a type that can have to one of several possible types.Unions are useful when we want to allow a varialbe or perameter to accept multiple types.The syntax for defining a union type in typeScript uses the pip symbol(|)

                Literal Types

Literal types allow you specify a value that can only be one specific literal value. This means that a variable with a literal type can only have one special value and no other.

                Tuples

Tuple is a type that represents an array with a fixed number of elements. where each element can have a different type .The order of the types in the tuple definition corresponds to the order of the values in the actual array.Tuples are similar to array, but they have to specify a  structure and can be used to model finite sequence with known lengths.


                Enums

Enums is a way to define a set of named constants. Enums allow you to defin a collection to related values that can be used interchnageably in your code