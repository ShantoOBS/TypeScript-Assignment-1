<h1>📘 TypeScript টিউটোরিয়াল: ৫টি গুরুত্বপূর্ণ প্রশ্নের উত্তর</h1>

<h2>১. Interface বনাম Type এর পার্থক্য</h2>
<p><strong>Interface</strong> এবং <strong>Type Alias</strong> object structure ডিফাইন করতে ব্যবহৃত হয়, তবে কিছু পার্থক্য রয়েছে:</p>
<table border="1">
  <tr>
    <th>বৈশিষ্ট্য</th>
    <th>Interface</th>
    <th>Type</th>
  </tr>
  <tr>
    <td>Declaration merging</td>
    <td>✅ সমর্থিত</td>
    <td>❌ সমর্থিত নয়</td>
  </tr>
  <tr>
    <td>Extends/Implements</td>
    <td>✅ সহজে করা যায়</td>
    <td>✅ করা যায়, তবে syntax আলাদা</td>
  </tr>
  <tr>
    <td>Use cases</td>
    <td>Object shape</td>
    <td>Object, union, tuple, primitive</td>
  </tr>
</table>
<pre><code>
interface User {
  name: string;
  age: number;
}
type Admin = {
  name: string;
  role: string;
};
</code></pre>

<h2>২. keyof কীওয়ার্ডের ব্যবহার</h2>
<p><code>keyof</code> object টাইপের সব property name থেকে একটি ইউনিয়ন টাইপ তৈরি করে।</p>
<pre><code>
type Person = {
  name: string;
  age: number;
};
type Keys = keyof Person; // "name" | "age"
</code></pre>
<p>এটি জেনেরিক ফাংশনে ব্যবহার করে টাইপ সেফ property access নিশ্চিত করা যায়:</p>
<pre><code>
function getValue&lt;T, K extends keyof T&gt;(obj: T, key: K): T[K] {
  return obj[key];
}
</code></pre>

<h2>৩. any, unknown, এবং never টাইপের পার্থক্য</h2>
<ul>
  <li><strong>any:</strong> যেকোনো টাইপ গ্রহণ করে টাইপ চেকিং বাইপাস করে।</li>
  <li><strong>unknown:</strong> যেকোনো টাইপ গ্রহণ করে, তবে ব্যবহার করার আগে টাইপ চেক করতে হয়।</li>
  <li><strong>never:</strong> এমন টাইপ যা কখনোই ঘটবে না (যেমন: error throw বা infinite loop)।</li>
</ul>
<pre><code>
let a: any = 5;
let b: unknown = "hello";
let c: never = (() => { throw new Error("Oops"); })();
</code></pre>

<h2>৪. Enums এর ব্যবহার</h2>
<p>Enums TypeScript-এ একটি নির্দিষ্ট নামকরণকৃত constant সেট তৈরি করতে ব্যবহৃত হয়।</p>
<p><strong>Numeric Enum:</strong></p>
<pre><code>
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
</code></pre>
<p><strong>String Enum:</strong></p>
<pre><code>
enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE"
}
</code></pre>

<h2>৫. Union এবং Intersection টাইপের উদাহরণ</h2>
<p><strong>Union:</strong> একটি টাইপ একাধিক সম্ভাব্য টাইপের যেকোনো একটি হতে পারে।</p>
<pre><code>
type ID = string | number;
let userId: ID = 101;
</code></pre>
<p><strong>Intersection:</strong> একটি টাইপ একাধিক টাইপের গুণাবলী একত্রে ধারণ করে।</p>
<pre><code>
type Person = { name: string };
type Employee = { employeeId: number };
type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Shanto",
  employeeId: 123
};
</code></pre>

<h3>✍️ লেখক:</h3>
<ul>
  <li>নাম: Shanto</li>
  <li>শিক্ষা: সফটওয়্যার ইঞ্জিনিয়ারিং ছাত্র, ISU</li>

</ul>
