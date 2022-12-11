import Link from "next/link";
export default function FirstPost() {
  return (
    <div>
      <div>First Post</div>
      <div>
        <Link href="/"> Back to home </Link>
      </div>
    </div>
  );
}
